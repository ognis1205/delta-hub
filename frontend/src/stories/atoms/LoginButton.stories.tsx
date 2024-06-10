/**
 * @fileoverview Defines @/atoms/LoginButton story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
