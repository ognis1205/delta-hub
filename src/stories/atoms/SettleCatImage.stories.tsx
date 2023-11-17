/**
 * @fileoverview Defines @/atoms/SettleCatImage story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as SettleCatImage } from '@/atoms/SettleCatImage';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'SettleCatImage',
  component: SettleCatImage,
} satisfies Meta<typeof SettleCatImage>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <SettleCatImage {...args} />,
};

export default meta;
