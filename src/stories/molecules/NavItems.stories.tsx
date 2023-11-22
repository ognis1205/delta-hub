/**
 * @fileoverview Defines @/molecules/NavItems story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as NavItems } from '@/molecules/NavItems';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavItems',
  component: NavItems,
} satisfies Meta<typeof NavItems>;

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

export const Default: Story = {
  args: {
    items: items,
  },
  render: (args) => <NavItems {...args} />,
};

export default meta;
