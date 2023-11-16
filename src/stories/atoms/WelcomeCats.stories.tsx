/**
 * @fileoverview Defines @/atoms/WelcomeCats story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as WelcomeCats } from '@/atoms/WelcomeCats';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'WelcomeCats',
  component: WelcomeCats,
} satisfies Meta<typeof WelcomeCats>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <WelcomeCats {...args} />,
};

export default meta;
