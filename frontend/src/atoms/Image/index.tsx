/**
 * @fileoverview Defines Image atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Image, ImageProps } from '@chakra-ui/react';
import { FC } from 'react';

export type Props = Omit<ImageProps, keyof Pick<ImageProps, 'objectFit'>> & {
  alt: string;
};

export const Component: FC<Props> = ({ alt, ...props }: Props) => (
  <Image {...props} alt={alt} objectFit={'contain'} />
);

Component.displayName = 'Image';
