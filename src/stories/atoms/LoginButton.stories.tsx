/**
 * @fileoverview Defines @/atoms/LoginButton story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as LoginButton } from '@/atoms/LoginButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'LoginButton',
  component: LoginButton,
} satisfies Meta<typeof LoginButton>;

type Story = StoryObj<typeof meta>;

export const Google: Story = {
  args: {
    provider: 'google',
  },
  render: (args) => <LoginButton {...args} />,
};

export const GitHub: Story = {
  args: {
    provider: 'github',
  },
  render: (args) => <LoginButton {...args} />,
};

export default meta;
