/**
 * @fileoverview Defines @/atoms/MenuItem story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as MenuItem } from '@/atoms/MenuItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'MenuItem',
  component: MenuItem,
} satisfies Meta<typeof MenuItem>;

type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    href: '/',
    iconName: 'home',
    name: 'Home',
  },
  render: (args) => <MenuItem {...args} />,
};

export const ShareRequests: Story = {
  args: {
    href: '/',
    iconName: 'share',
    name: 'Share requests',
  },
  render: (args) => <MenuItem {...args} />,
};

export const Explore: Story = {
  args: {
    href: '/',
    iconName: 'explore',
    name: 'Explore',
  },
  render: (args) => <MenuItem {...args} />,
};

export const YourProfile: Story = {
  args: {
    href: '/',
    iconName: 'profile',
    name: 'Your profile',
  },
  render: (args) => <MenuItem {...args} />,
};

export const EditStatus: Story = {
  args: {
    href: '/',
    iconName: 'editStatus',
    name: 'Edit Status',
  },
  render: (args) => <MenuItem {...args} />,
};

export const YourCatalogs: Story = {
  args: {
    href: '/',
    iconName: 'catalog',
    name: 'Your catalogs',
  },
  render: (args) => <MenuItem {...args} />,
};

export const YourStars: Story = {
  args: {
    href: '/',
    iconName: 'star',
    name: 'Your stars',
  },
  render: (args) => <MenuItem {...args} />,
};

export const Settings: Story = {
  args: {
    href: '/',
    iconName: 'gear',
    name: 'Settings',
  },
  render: (args) => <MenuItem {...args} />,
};

export default meta;
