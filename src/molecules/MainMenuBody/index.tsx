/**
 * @fileoverview Defines Main Menu Body molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Stack, Divider } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as MenuItem } from '@/atoms/MenuItem';

export type Props = Record<string, never>;

export const Component: FC<Props> = () => (
  <Stack>
    <MenuItem href={'/'} iconName={'home'} name={'Home'} />
    <MenuItem href={'/'} iconName={'share'} name={'Share requests'} />
    <Divider />
    <MenuItem href={'/'} iconName={'explore'} name={'Explore'} />
  </Stack>
);

Component.displayName = 'MainMenuBody';
