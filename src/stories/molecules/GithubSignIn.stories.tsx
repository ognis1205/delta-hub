/**
 * @fileoverview Defines @/molecules/GithubSignin story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as GithubSignIn } from '@/molecules/GithubSignIn';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'GithubSignIn',
  component: GithubSignIn,
} satisfies Meta<typeof GithubSignIn>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <GithubSignIn {...args} />,
};

export default meta;
