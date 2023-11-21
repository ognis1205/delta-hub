/**
 * @fileoverview Defines @/molecules/Breadcrumbs story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as Breadcrumbs } from '@/molecules/Breadcrumbs';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    path: '/home/about/current',
  },
  render: (args) => <Breadcrumbs {...args} />,
};

export default meta;
