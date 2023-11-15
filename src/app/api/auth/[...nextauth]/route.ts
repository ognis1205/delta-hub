/**
 * @fileoverview Defined Next Auth OpenID Connect route.
 * @copyright Shingo OKAWA 2023
 */
import NextAuth, { NextAuthOptions, JWT, Account, Provider } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { GoogleOAuth2 } from '@/utils/axios';
import logger from '@/utils/logger';

import type { AxiosResponse } from 'axios';

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

const refresh_google_oauth2 = async (jwt: JWT): Promise<JWT> => {
  try {
    const response: AxiosResponse<Account> = await GoogleOAuth2.post(
      'token?' +
        new URLSearchParams({
          client_id: process.env.GOOGLE_CLIENT_ID as string,
          client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
          grant_type: 'refresh_token',
          refresh_token: jwt.refreshToken,
        }),
    );
    return {
      ...jwt,
      accessToken: response.data.access_token,
      accessTokenExpires: Date.now() + response.data.expires_in * 1000,
      refreshToken: response.data.refresh_token ?? jwt.refreshToken,
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

const refresh_github_oauth2 = async (jwt: JWT): Promise<JWT> => {
  logger.info('GitHub does not support OAuth2.0 refresh token grant type');
  return jwt;
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
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
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
      if (account?.provider === 'google') {
        return refresh_google_oauth2(jwt as JWT);
      } else if (account?.provider === 'github') {
        return refresh_github_oauth2(jwt as JWT);
      } else {
        return jwt;
      }
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
