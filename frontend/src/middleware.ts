/**
 * @fileoverview Defines Next Auth middleware.
 * @copyright Shingo OKAWA 2023
 */
export { default } from 'next-auth/middleware';

export const config = {
  matcher: '/((?!api/sharing|static|.*\\..*|_next|$).*)',
};
