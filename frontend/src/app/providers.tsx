/**
 * @fileoverview Defines client side context providers.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { FC } from 'react';

import { theme as breadcrumbTheme } from '@/utils/chakra/themes/Breadcrumb';
import { theme as buttonTheme } from '@/utils/chakra/themes/Button';
import { theme as linkTheme } from '@/utils/chakra/themes/Link';
import { theme as menuTheme } from '@/utils/chakra/themes/Menu';

const components = {
  Breadcrumb: breadcrumbTheme,
  Button: buttonTheme,
  Link: linkTheme,
  Menu: menuTheme,
};

const colors = {
  DeltaColor1: {
    900: '#0A4E65',
    800: '#0C5E79',
    700: '#0E6E8D',
    600: '#107EA2',
    500: '#149DCA',
    400: '#2DBCEA',
    300: '#48C4ED',
    200: '#62CCEF',
    100: '#7CD5F2',
  },
  DeltaColor2: {
    900: '#062A36',
    800: '#073340',
    700: '#083B4B',
    600: '#094456',
    500: '#0B556B',
    400: '#128DB2',
    300: '#16AAD6',
    200: '#2ABDE9',
    100: '#4DC8ED',
  },
  Russian: {
    900: '#24252B',
    800: '#3A3B41',
    700: '#515258',
    600: '#696A71',
    500: '#82838A',
    400: '#9C9DA4',
    300: '#B7B8C0',
    200: '#D2D3DB',
    100: '#EFF0F8',
  },
  SonicSilver: {
    900: '#181817',
    800: '#30312F',
    700: '#494947',
    600: '#61625F',
    500: '#7A7B77',
    400: '#92938F',
    300: '#AAACA7',
    200: '#C3C4BF',
    100: '#DBDDD7',
  },
  AntiFlashWhite: {
    900: '#92938F',
    800: '#AAACA7',
    700: '#C3C4BF',
    600: '#DBDDD7',
    500: '#F4F6EF',
    400: '#F5F6F0',
    300: '#F6F7F2',
    200: '#F7F8F3',
    100: '#F8F9F5',
  },
  Ivory: {
    900: '#FFFFF0',
    800: '#FFFFF3',
    700: '#FFFFF5',
    600: '#FFFFF7',
    500: '#FFFFF9',
    400: '#FFFFFA',
    300: '#FFFFFB',
    200: '#FFFFFC',
    100: '#FFFFFD',
  },
};

export const theme = extendTheme({
  components,
  colors,
});

type Props = {
  children: React.ReactNode;
};

const Providers: FC<Props> = ({ children }: Props) => (
  <SessionProvider>
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  </SessionProvider>
);

Providers.displayName = 'Providers';

export default Providers;
