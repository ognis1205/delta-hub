/**
 * @fileoverview Defines Menu Item atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Box,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

export type Props = Omit<ChakraLinkProps, 'as'>;

export const Component: FC<Props> = ({ children, ...props }: Props) => (
  <Box
    __css={{
      _hover: {
        background: 'AntiFlashWhite.200',
      },
      _focus: {
        background: 'AntiFlashWhite.200',
      },
      _active: {
        background: 'AntiFlashWhite.300',
      },
      _expanded: {
        background: 'AntiFlashWhite.200',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    }}
    p={2}
    rounded={'md'}
  >
    <ChakraLink as={NextLink} {...props} variant={'menu'}>
      {children}
    </ChakraLink>
  </Box>
);

Component.displayName = 'MenuItem';
