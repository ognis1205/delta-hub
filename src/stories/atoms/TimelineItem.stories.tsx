/**
 * @fileoverview Defines @/atoms/TimelineItem story.
 * @copyright Shingo OKAWA 2023
 */
import { Link } from '@chakra-ui/react';

import { Component as TimelineItem } from '@/atoms/TimelineItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TimelineItem',
  component: TimelineItem,
} satisfies Meta<typeof TimelineItem>;

type Story = StoryObj<typeof meta>;

export const Share: Story = {
  args: {
    iconName: 'share',
  },
  render: (args) => (
    <TimelineItem {...args}>
      Shared catalog <Link>test</Link> with <Link>cat1</Link>
    </TimelineItem>
  ),
};

export const Request: Story = {
  args: {
    iconName: 'request',
  },
  render: (args) => (
    <TimelineItem {...args}>
      Requested to share catalog <Link>test</Link> from <Link>cat1</Link>
    </TimelineItem>
  ),
};

export const Create: Story = {
  args: {
    iconName: 'create',
  },
  render: (args) => (
    <TimelineItem {...args}>
      Created new catalog <Link>test</Link>
    </TimelineItem>
  ),
};

export default meta;
