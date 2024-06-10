/**
 * @fileoverview Defines Next Auth middleware.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
export { default } from 'next-auth/middleware';

export const config = {
  matcher: '/((?!api/sharing|static|.*\\..*|_next|$).*)',
};
