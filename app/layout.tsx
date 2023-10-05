/**
 * @fileoverview Defines root layout.
 * @copyright Shingo OKAWA 2023
 */
//import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Delta Catalog',
  description: 'Delta Catalog',
};

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default Layout;
