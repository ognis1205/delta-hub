/**
 * @fileoverview Defines Nav Logo atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
