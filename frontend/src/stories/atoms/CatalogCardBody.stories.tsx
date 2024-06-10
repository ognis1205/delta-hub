/**
 * @fileoverview Defines @/atoms/CatalogCardBody story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as CatalogCardBody } from '@/atoms/CatalogCardBody';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CatalogCardBody',
  component: CatalogCardBody,
} satisfies Meta<typeof CatalogCardBody>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <CatalogCardBody {...args}>
      Scientific data for university students
    </CatalogCardBody>
  ),
};

export default meta;
