/**
 * @fileoverview Defines @/atoms/TabItem story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as TabItem } from '@/atoms/TabItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TabItem',
  component: TabItem,
} satisfies Meta<typeof TabItem>;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    href: '/',
    iconName: 'overview',
    name: 'Overview',
  },
  render: (args) => <TabItem {...args} />,
};

export const Catalogs: Story = {
  args: {
    href: '/',
    iconName: 'catalog',
    name: 'Catalogs',
  },
  render: (args) => <TabItem {...args} />,
};

export const Stars: Story = {
  args: {
    href: '/',
    iconName: 'star',
    name: 'Stars',
  },
  render: (args) => <TabItem {...args} />,
};

export default meta;
