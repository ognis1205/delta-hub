/**
 * @fileoverview Defines @/atoms/MenuHeader story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as MenuHeader } from '@/atoms/MenuHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'MenuHeader',
  component: MenuHeader,
} satisfies Meta<typeof MenuHeader>;

type Story = StoryObj<typeof meta>;

export const ForMenuDrawer: Story = {
  args: {
    flexDir: 'row',
    alignItems: 'center',
    logoSize: 'sm',
    titleSize: 'sm',
  },
  render: (args) => <MenuHeader {...args} />,
};

export default meta;
