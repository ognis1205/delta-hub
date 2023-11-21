/**
 * @fileoverview Defines Nav Bar organism.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Box, BoxProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export type Props = BoxProps & {
  children: ReactNode;
};

export const Component: FC<Props> = ({ children, ...props }: Props) => (
  <></>
);

Component.displayName = 'NavBar';
