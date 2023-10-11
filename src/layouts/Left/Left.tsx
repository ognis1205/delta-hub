/**
 * @fileoverview Defines Left.
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
    w={['100%', '100%', '10%', '15%', '15%']}
    flexDir={'column'}
    alignItems={'center'}
    backgroundColor={'deltaColor2.900'}
    color={'white'}
  >
    {children}
  </Flex>
);

Layout.displayName = 'Left';

export default Layout;
