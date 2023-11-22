/**
 * @fileoverview Defines Main Menu Header molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Logo } from '@/atoms/Logo';

export type Props = Record<string, never>;

export const Component: FC<Props> = () => (
  <Box display={'flex'} alignItems={'center'}>
    <Logo size={'sm'} />
  </Box>
);

Component.displayName = 'MainMenuHeader';
