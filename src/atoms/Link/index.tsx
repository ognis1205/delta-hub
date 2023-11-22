/**
 * @fileoverview Defines Link atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

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
    <ChakraLink as={NextLink} {...props}>
      {children}
    </ChakraLink>
  );

Component.displayName = 'Link';
