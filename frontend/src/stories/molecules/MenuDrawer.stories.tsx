/**
 * @fileoverview Defines @/molecules/MenuDrawer story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
