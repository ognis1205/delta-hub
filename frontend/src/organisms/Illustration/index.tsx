/**
 * @fileoverview Defines Illustration organism.
 * @copyright Shingo OKAWA 2023
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
