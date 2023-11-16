/**
 * @fileoverview Defines WelcomeCats atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Image, ImageProps } from '@chakra-ui/react';
import { FC } from 'react';

export type Props = Omit<
  ImageProps,
  keyof Pick<ImageProps, 'src' | 'alt' | 'objectFit'>
>;

export const Component: FC<Props> = (props: Props) => (
  <Image
    {...props}
    src={'/images/welcome-cats.svg'}
    alt={'Welcome Cats'}
    objectFit={'contain'}
  />
);

Component.displayName = 'WelcomeCats';
