/**
 * @fileoverview Defines @/atoms/CatalogCardHeader story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as CatalogCardHeader } from '@/atoms/CatalogCardHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CatalogCardHeader',
  component: CatalogCardHeader,
} satisfies Meta<typeof CatalogCardHeader>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'scientific-data',
    href: '/',
  },
  render: (args) => <CatalogCardHeader {...args} />,
};

export default meta;
