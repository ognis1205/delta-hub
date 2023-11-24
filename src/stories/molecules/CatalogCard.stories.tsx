/**
 * @fileoverview Defines @/molecules/CatalogCard story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as CatalogCard } from '@/molecules/CatalogCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CatalogCard',
  component: CatalogCard,
} satisfies Meta<typeof CatalogCard>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'scientific-data',
    href: '/',
    description: 'Scientific data for university students',
    stars: 51,
    shares: 5,
  },
  render: (args) => <CatalogCard {...args} />,
};

export default meta;
