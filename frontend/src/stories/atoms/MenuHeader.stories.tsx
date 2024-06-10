/**
 * @fileoverview Defines @/atoms/MenuHeader story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
