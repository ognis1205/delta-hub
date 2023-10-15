/**
 * @fileoverview Defines Main.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => (
  <Flex
    w={['100%', '100%', '60%', '60%', '55%']}
    p={'3%'}
    flexDir={'column'}
    overflow={'auto'}
    minH={'100vh'}
  >
    {children}
  </Flex>
);

Layout.displayName = 'Main';

export default Layout;
