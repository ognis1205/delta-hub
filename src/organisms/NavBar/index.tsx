/**
 * @fileoverview Defines Nav Bar organism.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Flex, HStack } from '@chakra-ui/react';
import { FC } from 'react';
import { MdMenu } from 'react-icons/md';

import { Component as Copyright } from '@/atoms/Copyright';
import { Component as NavLogo } from '@/atoms/NavLogo';
import { Component as NavPath } from '@/atoms/NavPath';
import {
  Component as MainDrawer,
  Props as MainDrawerProps,
} from '@/molecules/MainDrawer';
import { Component as MainMenuBody } from '@/molecules/MainMenuBody';
import { Component as MainMenuHeader } from '@/molecules/MainMenuHeader';
import { Component as NavIconList } from '@/molecules/NavIconList';
import {
  Component as ProfileDrawer,
  Props as ProfileDrawerProps,
} from '@/molecules/ProfileDrawer';
import { Component as ProfileMenuBody } from '@/molecules/ProfileMenuBody';
import { Component as ProfileMenuHeader } from '@/molecules/ProfileMenuHeader';

const mainMenuProps = {
  placement: 'left' as const,
  icon: <MdMenu />,
  header: <MainMenuHeader />,
  body: <MainMenuBody />,
  footer: <Copyright fontSize={'xs'} color={'SonicSilver.500'} />,
  'aria-label': 'Open main menu',
} as MainDrawerProps;

export type Props = {
  path: string;
  id: string;
  name: string;
  profileSrc?: string;
};

const navItems = [
  {
    href: '/',
    popover: 'Create share',
    'aria-label': 'Create share',
    variant: 'nav',
    size: 'sm',
    iconName: 'plus' as const,
  },
  {
    href: '/',
    popover: 'Share requests',
    'aria-label': 'Share requests',
    variant: 'nav',
    size: 'sm',
    iconName: 'share' as const,
  },
  {
    href: '/',
    popover: 'Notifications',
    'aria-label': 'Notifications',
    variant: 'nav',
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
        <MainDrawer {...mainMenuProps} variant={'nav'} size={'sm'} />
        <NavLogo size={'xs'} />
        <NavPath path={path} fontSize={'sm'} />
      </HStack>
      <HStack spacing={4} alignItems={'center'}>
        <NavIconList
          items={navItems}
          direction={'row'}
          alignItems={'center'}
          flexGrow={1}
        />
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
