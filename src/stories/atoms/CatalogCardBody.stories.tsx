/**
 * @fileoverview Defines @/atoms/CatalogCardBody story.
 * @copyright Shingo OKAWA 2023
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
