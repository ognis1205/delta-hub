/**
 * @fileoverview Defines @/atoms/NavItem story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as NavItem } from '@/atoms/NavItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavItem',
  component: NavItem,
} satisfies Meta<typeof NavItem>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    popover: 'Popover',
    'aria-label': 'Icon',
    iconName: 'home',
  },
  render: (args) => <NavItem {...args} />,
};

export const AsNavigation: Story = {
  args: {
    popover: 'Popover',
    'aria-label': 'Icon',
    iconName: 'home',
  },
  render: (args) => <NavItem {...args} variant={'nav'} />,
};

export default meta;
