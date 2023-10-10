/**
 * @fileoverview Defined Next Auth OpenID Connect route.
 * @copyright Shingo OKAWA 2023
 */
import NextAuth, { NextAuthOptions, JWT } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import logger from '@/utils/logger';

type ClientType = {
  clientId: string;
  clientSecret: string;
  authorization: {
    params: {
      prompt: string;
      access_type: string;
      response_type: string;
    };
  };
};

const refresh = async (jwt: JWT): Promise<JWT> => {
  try {
    const response = await fetch(
      'https://oauth2.googleapis.com/token?' +
        new URLSearchParams({
          client_id: process.env.GOOGLE_CLIENT_ID as string,
          client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
          grant_type: 'refresh_token',
          refresh_token: jwt.refreshToken,
        }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
      },
    );

    const refreshedTokens = await response.json();
    if (!response.ok) throw refreshedTokens;

    return {
      ...jwt,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? jwt.refreshToken,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    logger.error(e);
    return {
      ...jwt,
      error: 'RefreshAccessTokenError',
    };
  }
};

const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    } as ClientType),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token: jwt, user, account }) {
      // The first attempt.
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_in * 1000,
          refreshToken: account.refresh_token,
          ...user,
        };
      }
      // Return previous token if the access token has not expired yet.
      if (Date.now() < (jwt.accessTokenExpires as number)) {
        return jwt;
      }
      // Access token has expired, try to update it.
      return refresh(jwt as JWT);
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email,
        image: token.image,
        name: token.name,
      };
      session.access_token = token.accessToken as string;
      session.error = token.error as string;
      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
