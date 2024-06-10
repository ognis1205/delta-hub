/**
 * @fileoverview Defines @/atoms/Copyright story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
