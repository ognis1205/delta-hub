/**
 * @fileoverview Defines @/atoms/CatalogCardFooter story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
