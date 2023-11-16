/**
 * @fileoverview Defines @/atoms/GoogleIcon story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as GoogleIcon } from '@/atoms/GoogleIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'GoogleIcon',
  component: GoogleIcon,
} satisfies Meta<typeof GoogleIcon>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <GoogleIcon {...args} />,
};

export default meta;
