/**
 * @fileoverview Defines @/atoms/Copyright story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as Copyright } from '@/atoms/Copyright';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Copyright',
  component: Copyright,
} satisfies Meta<typeof Copyright>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fontSize: 'xs',
    color: 'SonicSilver.500',
  },
  render: (args) => <Copyright {...args} />,
};

export default meta;
