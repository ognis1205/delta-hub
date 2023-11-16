/**
 * @fileoverview Defines @/atoms/SettleCat story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as SettleCat } from '@/atoms/SettleCat';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'SettleCat',
  component: SettleCat,
} satisfies Meta<typeof SettleCat>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <SettleCat {...args} />,
};

export default meta;
