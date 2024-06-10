/**
 * @fileoverview Defines Logo atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Image, ImageProps } from '@chakra-ui/react';
import { FC } from 'react';

export type Size = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export type Props = Omit<ImageProps, keyof Pick<ImageProps, 'boxSize'>> & {
  size?: Size;
};

const sizes = {
  '2xs': '1rem',
  xs: '1.5rem',
  sm: '2rem',
  md: '3rem',
  lg: '4rem',
  xl: '6rem',
  '2xl': '8rem',
  full: '100%',
} satisfies Record<Size, string>;

export const Component: FC<Props> = ({ size = 'md', ...props }: Props) => (
  <Image {...props} src={'/images/logo.png'} h={sizes[size]} alt={'Logo'} />
);

Component.displayName = 'Logo';
