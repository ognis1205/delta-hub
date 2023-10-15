/**
 * @fileoverview Defines Logo atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Image, ImageProps } from '@chakra-ui/react';
import { FC } from 'react';

import { when } from '@/utils/misc';

export type Theme = 'white' | 'black' | 'color';

export type Props = Omit<ImageProps, 'src' | 'alt' | 'objectFit'> & {
  theme?: Theme;
};

export const Component: FC<Props> = ({ theme = 'color' as const, ...props }: Props) => (
  <Image
    {...props}
    src={when(theme)
      .on(
        (v) => v === 'white',
        () => '/images/logo-white.png',
      )
      .on(
        (v) => v === 'black',
        () => '/images/logo-black.png',
      )
      .otherwise(() => '/images/logo.png',)}
    alt={'Delta Sharing'}
    objectFit={'contain'}
  />
);

Component.displayName = 'Logo';
