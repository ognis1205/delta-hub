/**
 * @fileoverview Defines @/molecules/NavLinkList story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as NavLinkList } from '@/molecules/NavLinkList';

import type { Props as TabItemProps } from '@/atoms/TabItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavLinkList',
  component: NavLinkList,
} satisfies Meta<typeof NavLinkList>;

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
  render: (args) => <NavLinkList {...args} />,
};

export const Item2IsActive: Story = {
  args: {
    path: '/item2',
    items: items,
  },
  render: (args) => <NavLinkList {...args} />,
};

export const Item3IsActive: Story = {
  args: {
    path: '/item3',
    items: items,
  },
  render: (args) => <NavLinkList {...args} />,
};

export default meta;
