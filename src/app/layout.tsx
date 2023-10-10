/**
 * @fileoverview Defines root layout.
 * @copyright Shingo OKAWA 2023
 */
import type { Metadata } from 'next';
import { FC, ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';

export const metadata: Metadata = {
  title: 'Delta Catalog',
  description: 'Delta Catalog for Delta Sharing',
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
