/**
 * @fileoverview Defines Home layout.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Stack } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { FC, ReactNode } from 'react';

import { Component as LeftPane } from '@/organisms/LeftPane';
import { Component as MainPane } from '@/organisms/MainPane';
import { Component as NavBar } from '@/organisms/NavBar';
import { Component as Profile } from '@/organisms/Profile';

type Props = {
  children: ReactNode;
};

const tabItems = [
  {
    href: '/home',
    iconName: 'overview' as const,
    name: 'Overview',
  },
  {
    href: '/home/catalogs',
    iconName: 'catalog' as const,
    name: 'Catalogs',
  },
  {
    href: '/home/stars',
    iconName: 'star' as const,
    name: 'Stars',
  },
];

const Layout: FC<Props> = ({ children }: Props) => {
  const { data: session } = useSession();

  const pathname = usePathname();

  return (
    <>
      <NavBar
        id={
          session && session.user
            ? session.user.email.split('@')[0]
            : 'Not Available'
        }
        name={session && session.user ? session.user.name : 'Not Available'}
        profileSrc={session && session.user ? session.user.image : undefined}
        path={pathname}
        tabItems={tabItems}
      />
      <Stack
        m={'auto'}
        py={10}
        px={10}
        maxW={'1280px'}
        flexDir={{ base: 'column', md: 'row' }}
        spacing={4}
      >
        <LeftPane w={{ base: '100%', md: '256px', xl: '296px' }}>
          <Profile
            imgSrc={session && session.user ? session.user.image : undefined}
            id={
              session && session.user
                ? session.user.email.split('@')[0]
                : 'Not Available'
            }
            name={session && session.user ? session.user.name : 'Not Available'}
            followers={24}
            following={20}
            address={'Tokyo, Japan'}
            email={'shingo.okawa.g.h.c@gmail.com'}
            link={'https://ognis1205.github.io'}
          />
        </LeftPane>
        <MainPane minW={0} flexGrow={1} title={'Home'} px={5}>
          {children}
        </MainPane>
      </Stack>
    </>
  );
};

Layout.displayName = 'HomeLayout';

export default Layout;
