/**
 * @fileoverview Defines @/atoms/WelcomeCatsImage story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as WelcomeCatsImage } from '@/atoms/WelcomeCatsImage';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'WelcomeCatsImage',
  component: WelcomeCatsImage,
} satisfies Meta<typeof WelcomeCatsImage>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <WelcomeCatsImage {...args} />,
};

export default meta;
