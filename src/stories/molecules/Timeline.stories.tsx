/**
 * @fileoverview Defines @/molecules/Timeline story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as Timeline } from '@/molecules/Timeline';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Timeline',
  component: Timeline,
} satisfies Meta<typeof Timeline>;

type Story = StoryObj<typeof meta>;

const items = [
  {
    activity: {
      kind: 'share' as const,
      detail: {
        numCatalog: 3,
        numPeople: 2,
      },
    },
  },
  {
    activity: {
      kind: 'request' as const,
      detail: {
        numCatalog: 3,
        numPeople: 11,
      },
    },
  },
  {
    activity: {
      kind: 'create' as const,
      detail: {
        numCatalog: 2,
      },
    },
  },
];

export const Default: Story = {
  args: {
    month: 'November',
    year: '2023',
    items: items,
  },
  render: (args) => <Timeline {...args} />,
};

export default meta;
