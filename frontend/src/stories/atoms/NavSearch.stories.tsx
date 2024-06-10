/**
 * @fileoverview Defines @/atoms/NavSearch story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
