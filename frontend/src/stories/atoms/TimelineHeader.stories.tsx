/**
 * @fileoverview Defines @/atoms/TimelineHeader story.
 * @copyright Shingo OKAWA 2023
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
