/**
 * @fileoverview Defines @/molecules/ProfileDrawer story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as ProfileDrawer } from '@/molecules/ProfileDrawer';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ProfileDrawer',
  component: ProfileDrawer,
} satisfies Meta<typeof ProfileDrawer>;

type Story = StoryObj<typeof meta>;

const items = [
  {
    href: '/',
    name: 'Your profile',
    iconName: 'profile' as const,
  },
  {
    href: '/',
    name: 'Edit status',
    iconName: 'editStatus' as const,
  },
  'divider' as const,
  {
    href: '/',
    name: 'Your catalogs',
    iconName: 'catalog' as const,
  },
  {
    href: '/',
    name: 'Your stars',
    iconName: 'star' as const,
  },
  'divider' as const,
  {
    href: '/',
    name: 'Settings',
    iconName: 'gear' as const,
  },
];

export const Default: Story = {
  args: {
    placement: 'left',
    src: '/images/no-image.png',
    size: 'sm',
    id: 'ognis1205',
    name: 'Shingo OKAWA',
    items: items,
    'aria-label': 'Open drawer',
  },
  render: (args) => <ProfileDrawer {...args} />,
};

export const NoSource: Story = {
  args: {
    placement: 'left',
    size: 'sm',
    id: 'ognis1205',
    name: 'Shingo OKAWA',
    items: items,
    'aria-label': 'Open drawer',
  },
  render: (args) => <ProfileDrawer {...args} />,
};

export default meta;
