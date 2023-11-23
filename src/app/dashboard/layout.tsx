/**
 * @fileoverview Defines dashboard layout.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Flex } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { FC, ReactNode } from 'react';

import { Navigate } from '@/components/Navigate';
import { Search } from '@/components/Search';
import { Profile } from '@/containers/Profile';
import { Share } from '@/containers/Share';
import { Left } from '@/layouts/Left';
import { Main } from '@/layouts/Main';
import { Right } from '@/layouts/Right';
import { Component as NavBar } from '@/organisms/NavBar';

const links = [
  {
    title: 'Home',
    icon: 'home' as const,
    href: '/dashboard',
  },
  {
    title: 'Catalog',
    icon: 'catalog' as const,
    href: '/dashboard/catalog',
  },
  {
    title: 'Share',
    icon: 'share' as const,
    href: '/dashboard/share',
  },
  {
    title: 'Tables',
    icon: 'table' as const,
    href: '/dashboard/table',
  },
  {
    title: 'Settings',
    icon: 'settings' as const,
    href: '/dashboard/settings',
  },
];

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  const { data: session } = useSession();

  return (
    <>
      <NavBar id={'ognis1205'} name={'Shingo OKAWA'} path={'/this/is/a/test'} />
      <Flex
        h={[null, null, '100vh']}
        maxW="2000px"
        flexDir={['column', 'column', 'row']}
        overflow="hidden"
      >
        <Flex
          w={['100%', '100%', '10%', '15%', '15%']}
          flexDir={'column'}
          alignItems={'center'}
          backgroundColor={'deltaColor2.900'}
          color={'white'}
        >
          <Navigate links={links} />
        </Flex>
        <Main>{children}</Main>
        <Right>
          <Search notifies={2} />
          <Profile
            image={
            session && session.user
            ? session.user.image
            : '/images/no-image.png'
            }
            name={session && session.user ? session.user.name : 'N/A'}
            email={session && session.user ? session.user.email : 'N/A'}
            shares={343}
            recipients={13}
          />
          <Share
            avatars={Array(5).fill(
              session && session.user
              ? session.user.image
              : '/images/no-image.png',
            )}
          />
        </Right>
      </Flex>
    </>
  );
};

Layout.displayName = 'DashboardLayout';

export default Layout;
