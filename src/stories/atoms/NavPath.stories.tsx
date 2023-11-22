/**
 * @fileoverview Defines @/atoms/NavPath story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as NavPath } from '@/atoms/NavPath';

import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'NavPath',
  component: NavPath,
} satisfies Meta<typeof NavPath>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    path: '/home/about/current',
  },
  render: (args) => <NavPath {...args} />,
};

export default meta;
