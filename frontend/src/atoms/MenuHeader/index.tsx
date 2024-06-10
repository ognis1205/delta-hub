/**
 * @fileoverview Defines Menu Header atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Stack, StackProps, Heading, HeadingProps } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Logo, Props as LogoProps } from '@/atoms/Logo';

export type Props = StackProps & {
  logoSize: LogoProps['size'];
  titleSize: HeadingProps['size'];
};

export const Component: FC<Props> = ({
  logoSize,
  titleSize,
  ...props
}: Props) => (
  <Stack {...props}>
    <Logo size={logoSize} />
    <Heading size={titleSize}>DeltaHub</Heading>
  </Stack>
);

Component.displayName = 'MenuHeader';
