/**
 * @fileoverview Defines Logo.
 * @copyright Shingo OKAWA 2022
 */
'use client';

import { FC } from 'react';
import { Image, ImageProps } from '@chakra-ui/react';

export type Props = Omit<ImageProps, 'src'>;

const Component: FC<Props> = (props: Props) => (
  <Image
    objectFit='contain'
    src='/logo.png'
    alt='Logo'
    {...props}
  />
);

Component.displayName = 'Logo';

export default Component;
