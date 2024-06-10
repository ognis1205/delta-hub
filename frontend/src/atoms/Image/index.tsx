/**
 * @fileoverview Defines Image atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
