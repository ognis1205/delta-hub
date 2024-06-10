/**
 * @fileoverview Defines @/molecules/TabItems story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as TabItems } from '@/molecules/TabItems';

import type { Props as TabItemProps } from '@/atoms/TabItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TabItems',
  component: TabItems,
} satisfies Meta<typeof TabItems>;

type Story = StoryObj<typeof meta>;

const items = [
  {
    href: '/item1',
    iconName: 'overview',
    name: 'Item1',
  },
  {
    href: '/item2',
    iconName: 'catalog',
    name: 'Item2',
  },
  {
    href: '/item3',
    iconName: 'star',
    name: 'Item3',
  },
  {
    href: '/item4',
    iconName: 'overview',
    name: 'Item4',
  },
  {
    href: '/item5',
    iconName: 'catalog',
    name: 'Item5',
  },
  {
    href: '/item6',
    iconName: 'star',
    name: 'Item6',
  },
  {
    href: '/item7',
    iconName: 'overview',
    name: 'Item7',
  },
  {
    href: '/item8',
    iconName: 'catalog',
    name: 'Item8',
  },
  {
    href: '/item9',
    iconName: 'star',
    name: 'Item9',
  },
] satisfies TabItemProps[];

export const Item1IsActive: Story = {
  args: {
    path: '/item1',
    items: items,
  },
  render: (args) => <TabItems {...args} />,
};

export const Item2IsActive: Story = {
  args: {
    path: '/item2',
    items: items,
  },
  render: (args) => <TabItems {...args} />,
};

export const Item3IsActive: Story = {
  args: {
    path: '/item3',
    items: items,
  },
  render: (args) => <TabItems {...args} />,
};

export default meta;
