/**
 * @fileoverview Defines Not Found Art organism.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Box, BoxProps, AbsoluteCenter } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as SettleCatImage } from '@/atoms/SettleCatImage';

export type Props = Omit<
  BoxProps,
  keyof Pick<
    BoxProps,
    | 'width'
    | 'w'
    | 'height'
    | 'h'
    | 'position'
    | 'backgroundImage'
    | 'bgImage'
    | 'backgroundSize'
    | 'bgSize'
    | 'backgroundRepeat'
    | 'bgRepeat'
    | 'textAlign'
  >
>;

export const Component: FC<Props> = (props: Props) => (
  <Box
    {...props}
    h={'100%'}
    w={'100%'}
    position={'relative'}
    bgImage={'url("/images/wave.png")'}
    bgSize={'100% 100%'}
    bgRepeat={'no-repeat'}
  >
    <AbsoluteCenter>
      <SettleCatImage />
    </AbsoluteCenter>
  </Box>
);

Component.displayName = 'NotFoundArt';