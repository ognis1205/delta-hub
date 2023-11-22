/**
 * @fileoverview Defines Nav Bar organism.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Flex, HStack } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Copyright } from '@/atoms/Copyright';
import { Component as NavLogo } from '@/atoms/NavLogo';
import { Component as NavPath } from '@/atoms/NavPath';
import { Component as MenuDrawer } from '@/molecules/MenuDrawer';
import { Component as NavItems } from '@/molecules/NavItems';
import {
  Component as ProfileDrawer,
  Props as ProfileDrawerProps,
} from '@/molecules/ProfileDrawer';
import { Component as ProfileMenuBody } from '@/molecules/ProfileMenuBody';
import { Component as ProfileMenuHeader } from '@/molecules/ProfileMenuHeader';

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

const profileMenuProps = {
  placement: 'right' as const,
  body: <ProfileMenuBody />,
  footer: <Copyright fontSize={'xs'} color={'SonicSilver.500'} />,
  'aria-label': 'Open profile menu',
} satisfies Partial<ProfileDrawerProps>;

export const Component: FC<Props> = ({
  path,
  id,
  name,
  profileSrc = undefined,
}: Props) => {
  return (
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
        <NavItems items={navItems} />
        <ProfileDrawer
          {...profileMenuProps}
          variant={'nav'}
          size={'sm'}
          header={<ProfileMenuHeader id={id} name={name} src={profileSrc} />}
        />
      </HStack>
    </Flex>
  );
};

Component.displayName = 'NavBar';
