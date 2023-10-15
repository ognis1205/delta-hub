/**
 * @fileoverview Defines client side context providers.
 * @copyright Shingo OKAWA 2023
 */
'use client';

//import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { FC } from 'react';

const colors = {
  deltaColor1: {
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
  deltaColor2: {
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
};

const theme = extendTheme({ colors });

type Props = {
  children: React.ReactNode;
};

const Providers: FC<Props> = ({ children }: Props) => (
  <SessionProvider>
    <CacheProvider>
      {/*<BrowserRouter>*/}
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
      {/*</BrowserRouter>*/}
    </CacheProvider>
  </SessionProvider>
);

Providers.displayName = 'Providers';

export default Providers;
