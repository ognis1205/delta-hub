/**
 * @fileoverview Defines @/atoms/NavItem story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as NavItem } from '@/atoms/NavItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavItem',
  component: NavItem,
} satisfies Meta<typeof NavItem>;

type Story = StoryObj<typeof meta>;

export const Plus: Story = {
  args: {
    popover: 'Plus',
    'aria-label': 'Plus',
    iconName: 'plus',
  },
  render: (args) => <NavItem {...args} />,
};

export const Share: Story = {
  args: {
    popover: 'Share',
    'aria-label': 'Share',
    iconName: 'share',
  },
  render: (args) => <NavItem {...args} />,
};

export const Notify: Story = {
  args: {
    popover: 'Notify',
    'aria-label': 'Notify',
    iconName: 'notify',
  },
  render: (args) => <NavItem {...args} />,
};

export default meta;
