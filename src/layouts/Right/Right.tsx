/**
 * @fileoverview Defines Right.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { FC, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

export type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => (
  <Flex
    w={['100%', '100%', '30%']}
    backgroundColor={'gray.100'}
    p={'3%'}
    flexDir={'column'}
    overflow={'auto'}
    minW={[null, null, '300px', '300px', '400px']}
  >
    {children}
  </Flex>
);

Layout.displayName = 'Right';

export default Layout;
