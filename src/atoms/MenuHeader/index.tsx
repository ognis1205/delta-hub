/**
 * @fileoverview Defines Menu Header atom.
 * @copyright Shingo OKAWA 2023
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
