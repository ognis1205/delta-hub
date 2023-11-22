/**
 * @fileoverview Defines Profile Menu Body molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Stack, Divider } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as MenuItem } from '@/atoms/MenuItem';

export type Props = Record<string, never>;

export const Component: FC<Props> = () => (
  <Stack>
    <MenuItem href={'/'} iconName={'profile'} name={'Your profile'} />
    <MenuItem href={'/'} iconName={'editStatus'} name={'Edit status'} />
    <Divider />
    <MenuItem href={'/'} iconName={'catalog'} name={'Your catalogs'} />
    <MenuItem href={'/'} iconName={'star'} name={'Your stars'} />
    <Divider />
    <MenuItem href={'/'} iconName={'gear'} name={'Settings'} />
  </Stack>
);

Component.displayName = 'ProfileMenuBody';
