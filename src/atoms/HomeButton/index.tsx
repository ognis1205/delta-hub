/**
 * @fileoverview Defines Home Button atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Image, ImageProps, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

export type Size = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export type Props = Omit<ImageProps, keyof Pick<ImageProps, 'boxSize'>> & {
  size?: Size;
  isDisabled?: boolean;
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

export const Component: FC<Props> = ({ size = 'md', isDisabled = false, ...props }: Props) => isDisabled ? (
  <Image
    {...props}
    src={'/images/logo.png'}
    h={sizes[size]}
    alt={'Home button'}
  />
) : (
  <Link as={NextLink} href={'/'}>
    <Image
      {...props}
      src={'/images/logo.png'}
      h={sizes[size]}
      alt={'Home button'}
    />
  </Link>
);

Component.displayName = 'HomeButton';
