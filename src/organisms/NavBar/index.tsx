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
import { Component as TabItems } from '@/molecules/TabItems';

export type Props = {
  path: string;
  id: string;
  name: string;
  profileSrc?: string;
};

const menuItems = [
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
    size: 'sm',
    iconName: 'plus' as const,
  },
  {
    href: '/',
    popover: 'Share requests',
    'aria-label': 'Share requests',
    size: 'sm',
    iconName: 'share' as const,
  },
  {
    href: '/',
    popover: 'Notifications',
    'aria-label': 'Notifications',
    size: 'sm',
    iconName: 'notify' as const,
  },
];

const profileItems = [
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

const tabItems = [
  {
    href: '/overview',
    iconName: 'overview' as const,
    name: 'Overview',
  },
  {
    href: '/catalogs',
    iconName: 'catalog' as const,
    name: 'Catalogs',
  },
  {
    href: '/stars',
    iconName: 'star' as const,
    name: 'Stars',
  },
];

export const Component: FC<Props> = ({
  path,
  id,
  name,
  profileSrc = undefined,
}: Props) => {
  return (
    <VStack spacing={0} align="stretch">
      <Flex
        h={14}
        p={2}
        bg={'AntiFlashWhite.500'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <HStack spacing={4} alignItems={'center'}>
          <MenuDrawer
            placement={'left'}
            items={menuItems}
            size={'sm'}
            aria-label={'Open menu'}
          />
          <NavLogo size={'xs'} />
          <NavPath path={path} fontSize={'sm'} />
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
        px={2}
        pb={0}
        bg={'AntiFlashWhite.500'}
        alignItems={'center'}
        justifyContent={'space-between'}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'AntiFlashWhite.600'}
      >
        <TabItems path={'/overview'} items={tabItems} />
      </Flex>
    </VStack>
  );
};

Component.displayName = 'NavBar';
