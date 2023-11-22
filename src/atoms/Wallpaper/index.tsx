/**
 * @fileoverview Defines Wallpaper atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Box, BoxProps, AbsoluteCenter } from '@chakra-ui/react';
import { FC } from 'react';

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
  >
> & {
  src: string;
};

export const Component: FC<Props> = ({ src, children, ...props }: Props) => (
  <Box
    {...props}
    h={'100%'}
    w={'100%'}
    position={'relative'}
    bgImage={`url(${src})`}
    bgSize={'100% 100%'}
    bgRepeat={'no-repeat'}
  >
    <AbsoluteCenter>{children}</AbsoluteCenter>
  </Box>
);

Component.displayName = 'Wallpaper';
