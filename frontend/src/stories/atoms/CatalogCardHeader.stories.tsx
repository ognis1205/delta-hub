/**
 * @fileoverview Defines @/atoms/CatalogCardHeader story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
