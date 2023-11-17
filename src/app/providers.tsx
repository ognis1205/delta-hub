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
  colors,
});

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
