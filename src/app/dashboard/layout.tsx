/**
 * @fileoverview Defines dashboard layout.
 * @copyright Shingo OKAWA 2023
 */
import { FC, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

import { Navigation } from '@/components/Navigation';

const navigationItems = [
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
    {/* Column 1 */}
    <Navigation items={navigationItems} />
    {/* Column 2 */}
    <Flex
      w={['100%', '100%', '60%', '60%', '55%']}
      p={'3%'}
      flexDir={'column'}
      overflow={'auto'}
      minH={'100vh'}
    >
      {children}
    </Flex>
  </Flex>
);

Layout.displayName = 'DashboardLayout';

export default Layout;
