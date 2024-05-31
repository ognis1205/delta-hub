/**
 * @fileoverview Defines @/atoms/Icon story.
 * @copyright Shingo OKAWA 2023
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
