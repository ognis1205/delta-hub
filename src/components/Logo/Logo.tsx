/**
 * @fileoverview Defines Logo.
 * @copyright Shingo OKAWA 2022
 */
'use client';

import { FC } from 'react';
import { Image, ImageProps } from '@chakra-ui/react';

export type Props = Omit<ImageProps, 'src' | 'alt' | 'objectFit'>;

const Component: FC<Props> = (props: Props) => (
  <Image
    src={'/images/logo.png'}
    alt={'Logo'}
    objectFit={'contain'}
    {...props}
  />
);

Component.displayName = 'Logo';

export default Component;
