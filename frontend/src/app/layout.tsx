/**
 * @fileoverview Defines Root layout.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Inter } from 'next/font/google';
import { FC, ReactNode } from 'react';

import Providers from '@/app/providers';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DeltaHub',
  description: 'Data Sharing Platform for Everyone',
};

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => (
  <html lang={'en'}>
    <body className={inter.className}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

Layout.displayName = 'RootLayout';

export default Layout;
