/**
 * @fileoverview Defines @/molecules/GoogleSignin story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as GoogleSignIn } from '@/molecules/GoogleSignIn';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'GoogleSignIn',
  component: GoogleSignIn,
} satisfies Meta<typeof GoogleSignIn>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <GoogleSignIn {...args} />,
};

export default meta;
