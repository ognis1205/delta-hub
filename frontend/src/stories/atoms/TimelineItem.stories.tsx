/**
 * @fileoverview Defines @/atoms/TimelineItem story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as TimelineItem } from '@/atoms/TimelineItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TimelineItem',
  component: TimelineItem,
} satisfies Meta<typeof TimelineItem>;

type Story = StoryObj<typeof meta>;

export const Share: Story = {
  args: {
    activity: {
      kind: 'share' as const,
      detail: {
        numCatalog: 3,
        numPeople: 2,
      },
    },
  },
  render: (args) => <TimelineItem {...args} />,
};

export const Request: Story = {
  args: {
    activity: {
      kind: 'request' as const,
      detail: {
        numCatalog: 3,
        numPeople: 11,
      },
    },
  },
  render: (args) => <TimelineItem {...args} />,
};

export const Create: Story = {
  args: {
    activity: {
      kind: 'create' as const,
      detail: {
        numCatalog: 2,
      },
    },
  },
  render: (args) => <TimelineItem {...args} />,
};

export default meta;
