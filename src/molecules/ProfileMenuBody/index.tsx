/**
 * @fileoverview Defines Profile Menu Body molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Stack, Divider, HStack, Icon, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { FaRegUser, FaUserEdit, FaRegStar } from 'react-icons/fa';
import { GrCatalogOption } from 'react-icons/gr';
import { IoSettingsOutline } from 'react-icons/io5';

import { Component as MenuItem } from '@/atoms/MenuItem';

export type Props = Record<string, never>;

export const Component: FC<Props> = () => (
  <Stack>
    <MenuItem href={'/'}>
      <HStack>
        <Icon as={FaRegUser} />
        <Text>Your profile</Text>
      </HStack>
    </MenuItem>
    <MenuItem href={'/'}>
      <HStack>
        <Icon as={FaUserEdit} />
        <Text>Edit status</Text>
      </HStack>
    </MenuItem>
    <Divider />
    <MenuItem href={'/'}>
      <HStack>
        <Icon as={GrCatalogOption} />
        <Text>Your catalogs</Text>
      </HStack>
    </MenuItem>
    <MenuItem href={'/'}>
      <HStack>
        <Icon as={FaRegStar} />
        <Text>Your stars</Text>
      </HStack>
    </MenuItem>
    <Divider />
    <MenuItem href={'/'}>
      <HStack>
        <Icon as={IoSettingsOutline} />
        <Text>Settings</Text>
      </HStack>
    </MenuItem>
  </Stack>
);

Component.displayName = 'ProfileMenuBody';
