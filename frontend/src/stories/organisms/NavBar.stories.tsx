/**
 * @fileoverview Defines @/organisms/NavBar story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as NavBar } from '@/organisms/NavBar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavBar',
  component: NavBar,
} satisfies Meta<typeof NavBar>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'ognis1205',
    name: 'Shingo OKAWA',
    path: '/this/is/a/test',
    tabItems: [
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
    ],
  },
  render: (args) => <NavBar {...args} />,
};

export default meta;
