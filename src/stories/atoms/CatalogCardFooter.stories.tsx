/**
 * @fileoverview Defines @/atoms/CatalogCardFooter story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as CatalogCardFooter } from '@/atoms/CatalogCardFooter';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CatalogCardFooter',
  component: CatalogCardFooter,
} satisfies Meta<typeof CatalogCardFooter>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stars: 51,
    shares: 5,
  },
  render: (args) => <CatalogCardFooter {...args} />,
};

export default meta;
