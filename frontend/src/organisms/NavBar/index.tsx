/**
 * @fileoverview Defines Nav Bar organism.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Flex, HStack, VStack } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as NavLogo } from '@/atoms/NavLogo';
import { Component as NavPath } from '@/atoms/NavPath';
import { Component as NavSearch } from '@/atoms/NavSearch';
import { Component as MenuDrawer } from '@/molecules/MenuDrawer';
import { Component as NavItems } from '@/molecules/NavItems';
import { Component as ProfileDrawer } from '@/molecules/ProfileDrawer';
import {
  Component as TabItems,
  Props as TabItemsProps,
} from '@/molecules/TabItems';

export type Props = {
  path: string;
  id: string;
  name: string;
  profileSrc?: string;
  tabItems: TabItemsProps['items'];
};

const menuItems = [
  'divider' as const,
  {
    href: '/',
    name: 'Home',
    iconName: 'home' as const,
  },
  {
    href: '/',
    name: 'Share requests',
    iconName: 'share' as const,
  },
  'divider' as const,
  {
    href: '/',
    name: 'Explore',
    iconName: 'explore' as const,
  },
];

const navItems = [
  {
    href: '/',
    popover: 'Create share',
    'aria-label': 'Create share',
    size: 'md',
    iconName: 'plus' as const,
  },
  {
    href: '/',
    popover: 'Share requests',
    'aria-label': 'Share requests',
    size: 'md',
    iconName: 'share' as const,
  },
  {
    href: '/',
    popover: 'Notifications',
    'aria-label': 'Notifications',
    size: 'md',
    iconName: 'notify' as const,
  },
];

const profileItems = [
  'divider' as const,
  {
    href: '/',
    name: 'Your profile',
    iconName: 'profile' as const,
  },
  {
    href: '/',
    name: 'Edit status',
    iconName: 'editStatus' as const,
  },
  'divider' as const,
  {
    href: '/',
    name: 'Your catalogs',
    iconName: 'catalog' as const,
  },
  {
    href: '/',
    name: 'Your stars',
    iconName: 'star' as const,
  },
  'divider' as const,
  {
    href: '/',
    name: 'Settings',
    iconName: 'gear' as const,
  },
];

export const Component: FC<Props> = ({
  path,
  id,
  name,
  profileSrc = undefined,
  tabItems,
}: Props) => {
  return (
    <VStack spacing={0} align="stretch">
      <Flex
        h={14}
        px={5}
        py={4}
        bg={'gray.50'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <HStack spacing={4} alignItems={'center'}>
          <MenuDrawer
            placement={'left'}
            items={menuItems}
            size={'md'}
            aria-label={'Open menu'}
          />
          <NavLogo size={'sm'} />
          <NavPath path={path} fontSize={'md'} />
        </HStack>
        <HStack spacing={4} alignItems={'center'}>
          <NavSearch />
          <NavItems items={navItems} />
          <ProfileDrawer
            placement={'right'}
            items={profileItems}
            size={'sm'}
            id={id}
            name={name}
            src={profileSrc}
            aria-label={'Open profile'}
          />
        </HStack>
      </Flex>
      <Flex
        px={6}
        py={0}
        bg={'gray.50'}
        alignItems={'center'}
        justifyContent={'space-between'}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'gray.200'}
      >
        <TabItems path={path} items={tabItems} />
      </Flex>
    </VStack>
  );
};

Component.displayName = 'NavBar';
