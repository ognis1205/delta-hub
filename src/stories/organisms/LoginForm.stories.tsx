/**
 * @fileoverview Defines @/organisms/LoginForm story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as LoginForm } from '@/organisms/LoginForm';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <LoginForm {...args} />,
};

export default meta;
