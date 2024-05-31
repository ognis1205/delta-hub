/**
 * @fileoverview Defines @/molecules/MenuDrawer story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as MenuDrawer } from '@/molecules/MenuDrawer';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'MenuDrawer',
  component: MenuDrawer,
} satisfies Meta<typeof MenuDrawer>;

type Story = StoryObj<typeof meta>;

const items = [
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

export const Default: Story = {
  args: {
    placement: 'left',
    items: items,
    'aria-label': 'Open drawer',
  },
  render: (args) => <MenuDrawer {...args} />,
};

export default meta;
