/**
 * @fileoverview Next Auth OpenID Connect utilities.
 * @copyright Shingo OKAWA 2023
 */
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

type ClientType = {
  clientId: string;
  clientSecret: string;
};

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    } as ClientType),
  ],
};

export default NextAuth(nextAuthOptions);
