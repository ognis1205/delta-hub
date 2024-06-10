/**
 * @fileoverview Defines @/atoms/TimelineHeader story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as TimelineHeader } from '@/atoms/TimelineHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TimelineHeader',
  component: TimelineHeader,
} satisfies Meta<typeof TimelineHeader>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    month: 'November',
    year: '2023',
  },
  render: (args) => <TimelineHeader {...args} />,
};

export default meta;
