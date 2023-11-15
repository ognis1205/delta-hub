/**
 * @fileoverview Expands Next Auth data types.
 * @copyright Shingo OKAWA 2023
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
  type Provider = 'google' | 'github';

  interface Account {
    provider: Provider;
    access_token: string;
    refresh_token: string;
    expires_in: number;
  }

  interface JWT extends Record<string, unknown> {
    accessToken: string;
    accessTokenExpires: number;
    refreshToken: string;
    email: string;
    id: string;
    image: string;
    name: string;
    error?: string;
  }

  interface Session {
    user: DefaultSession['user'];
    access_token: string;
    error?: string;
  }
}
