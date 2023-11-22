/**
 * @fileoverview Defines @/molecules/NavIconList story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as NavIconList } from '@/molecules/NavIconList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavIconList',
  component: NavIconList,
} satisfies Meta<typeof NavIconList>;

type Story = StoryObj<typeof meta>;

const items = [
  {
    href: '/',
    popover: 'Home',
    'aria-label': 'Home',
    iconName: 'home' as const,
  },
  {
    href: '/',
    popover: 'Info',
    'aria-label': 'Info',
    iconName: 'info' as const,
  },
  {
    href: '/',
    popover: 'Question',
    'aria-label': 'Question',
    iconName: 'question' as const,
  },
];

const navItems = [
  {
    href: '/',
    popover: 'Home',
    'aria-label': 'Home',
    variant: 'nav',
    iconName: 'home' as const,
  },
  {
    href: '/',
    popover: 'Info',
    'aria-label': 'Info',
    variant: 'nav',
    iconName: 'info' as const,
  },
  {
    href: '/',
    popover: 'Question',
    'aria-label': 'Question',
    variant: 'nav',
    iconName: 'question' as const,
  },
];

export const Default: Story = {
  args: {
    items: items,
    direction: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  render: (args) => <NavIconList {...args} />,
};

export const AsNavigation: Story = {
  args: {
    items: navItems,
    direction: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  render: (args) => <NavIconList {...args} />,
};

export default meta;
