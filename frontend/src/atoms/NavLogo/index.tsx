/**
 * @fileoverview Defines Nav Logo atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

import { Component as Logo, Props as LogoProps } from '@/atoms/Logo';

export type Size = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export type Props = LogoProps;

export const Component: FC<Props> = (props: Props) => (
  <Link as={NextLink} href={'/'}>
    <Logo {...props} />
  </Link>
);

Component.displayName = 'NavLogo';
