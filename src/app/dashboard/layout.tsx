/**
 * @fileoverview Defines dashboard layout.
 * @copyright Shingo OKAWA 2023
 */
import { FC, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

import { Navigation } from '@/components/Navigation';
import { Left } from '@/layouts/Left';
import { Main } from '@/layouts/Main';
import { Right } from '@/layouts/Right';

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

const Layout: FC<Props> = ({ children }: Props) => (
  <Flex
    h={[null, null, '100vh']}
    maxW="2000px"
    flexDir={['column', 'column', 'row']}
    overflow="hidden"
  >
    <Left>
      <Navigation links={links} />
    </Left>
    <Main>{children}</Main>
    {/* Column 2 */}
    <Right></Right>
  </Flex>
);

Layout.displayName = 'DashboardLayout';

export default Layout;
