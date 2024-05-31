/**
 * @fileoverview Defines @/atoms/NavSearch story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as NavSearch } from '@/atoms/NavSearch';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavSearch',
  component: NavSearch,
} satisfies Meta<typeof NavSearch>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <NavSearch {...args} />,
};

export default meta;
