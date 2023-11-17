/**
 * @fileoverview Defines NavLink atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  chakra,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

const ChakraNextLink = chakra(ChakraLink, {
  textDecoration: 'none',
  _hover: {
    textDecoration: 'none',
  },
});

export type Props = Omit<ChakraLinkProps, 'as'> & {
  isExternal?: boolean;
};

export const Component: FC<Props> = ({
  isExternal = false,
  children,
  ...props
}: Props) =>
  isExternal ? (
    <ChakraLink {...props}>{children}</ChakraLink>
  ) : (
    <ChakraNextLink as={NextLink} {...props}>
      {children}
    </ChakraNextLink>
  );

Component.displayName = 'NavLink';
