/**
 * @fileoverview Defines Logo.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Image, ImageProps } from '@chakra-ui/react';
import { FC } from 'react';

import { when } from '@/utils/misc';

export type Props = Omit<ImageProps, 'src' | 'alt' | 'objectFit'> & {
  color?: string;
};

const Component: FC<Props> = ({ color = 'color', ...props }: Props) => {
  const src = when(color)
    .on(
      (v) => v === 'white',
      () => '/images/logo-white.png',
    )
    .on(
      (v) => v === 'black',
      () => '/images/logo-black.png',
    )
    .otherwise(() => '/images/logo.png');

  return <Image src={src} alt={'Logo'} objectFit={'contain'} {...props} />;
};

Component.displayName = 'Logo';

export default Component;
