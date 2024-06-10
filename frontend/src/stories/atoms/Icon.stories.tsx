/**
 * @fileoverview Defines @/atoms/Icon story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Icon } from '@/atoms/Icon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof meta>;

export const Github: Story = {
  args: {
    iconName: 'github',
  },
  render: (args) => <Icon {...args} />,
};

export const Google: Story = {
  args: {
    iconName: 'google',
  },
  render: (args) => <Icon {...args} />,
};

export default meta;
