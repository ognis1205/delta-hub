/**
 * @fileoverview Defines @/molecules/SocialLogin story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as SocialLogin } from '@/molecules/SocialLogin';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'SocialLogin',
  component: SocialLogin,
} satisfies Meta<typeof SocialLogin>;

type Story = StoryObj<typeof meta>;

export const Google: Story = {
  args: {
    provider: 'google',
  },
  render: (args) => <SocialLogin {...args} />,
};

export const GitHub: Story = {
  args: {
    provider: 'github',
  },
  render: (args) => <SocialLogin {...args} />,
};

export default meta;
