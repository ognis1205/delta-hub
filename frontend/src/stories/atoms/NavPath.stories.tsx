/**
 * @fileoverview Defines @/atoms/NavPath story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as NavPath } from '@/atoms/NavPath';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavPath',
  component: NavPath,
} satisfies Meta<typeof NavPath>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    path: '/home/about/current',
  },
  render: (args) => <NavPath {...args} />,
};

export default meta;
