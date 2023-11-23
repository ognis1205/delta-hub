/**
 * @fileoverview Defines Home layout.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Box, Flex } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { FC, ReactNode } from 'react';

import { Search } from '@/components/Search';
import { Profile } from '@/containers/Profile';
import { Share } from '@/containers/Share';
import { Left } from '@/layouts/Left';
import { Main } from '@/layouts/Main';
import { Right } from '@/layouts/Right';
import { Component as MainPanel } from '@/organisms/MainPanel';
import { Component as NavBar } from '@/organisms/NavBar';

type Props = {
  children: ReactNode;
};

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
      />
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
        >
          <Box>Left panel</Box>
        </Flex>
        <MainPanel title={'Home'}>{children}</MainPanel>
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

Layout.displayName = 'HomeLayout';

export default Layout;
