/**
 * @fileoverview Defines Illustration organism.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { FC } from 'react';

import { Component as Image, Props as ImageProps } from '@/atoms/Image';
import { Component as Wallpaper } from '@/atoms/Wallpaper';

export type Props = ImageProps;

export const Component: FC<Props> = ({ alt, ...props }: Props) => (
  <Wallpaper src={'/images/wave.png'}>
    <Image alt={alt} {...props} />
  </Wallpaper>
);

Component.displayName = 'Illustration';
