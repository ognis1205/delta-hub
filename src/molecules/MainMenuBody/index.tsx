/**
 * @fileoverview Defines Main Menu Body molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Stack, Divider, HStack, Icon, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { FaHome, FaShareAlt } from 'react-icons/fa';
import { IoTelescopeOutline } from 'react-icons/io5';

import { Component as MenuItem } from '@/atoms/MenuItem';

export type Props = Record<string, never>;

export const Component: FC<Props> = () => (
  <Stack>
    <MenuItem href={'/'}>
      <HStack>
        <Icon as={FaHome} />
        <Text>Home</Text>
      </HStack>
    </MenuItem>
    <MenuItem href={'/'}>
      <HStack>
        <Icon as={FaShareAlt} />
        <Text>Share requests</Text>
      </HStack>
    </MenuItem>
    <Divider />
    <MenuItem href={'/'}>
      <HStack>
        <Icon as={IoTelescopeOutline} />
        <Text>Explore</Text>
      </HStack>
    </MenuItem>
  </Stack>
);

Component.displayName = 'MainMenuBody';
