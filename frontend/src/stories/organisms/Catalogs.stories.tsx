/**
 * @fileoverview Defines @/organisms/Catalogs story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Catalogs } from '@/organisms/Catalogs';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Catalogs',
  component: Catalogs,
} satisfies Meta<typeof Catalogs>;

type Story = StoryObj<typeof meta>;

const items = [
  {
    name: 'scientific-data',
    href: '/',
    description: 'Scientific data for university students',
    stars: 51,
    shares: 5,
  },
  {
    name: 'covid',
    href: '/',
    description: 'Official daily counts of COVID-19 cases',
    stars: 151,
    shares: 1115,
  },
  {
    name: 'scientific-data',
    href: '/',
    description: 'Scientific data for university students',
    stars: 51,
    shares: 5,
  },
  {
    name: 'covid',
    href: '/',
    description: 'Official daily counts of COVID-19 cases',
    stars: 151,
    shares: 1115,
  },
  {
    name: 'scientific-data',
    href: '/',
    description: 'Scientific data for university students',
    stars: 51,
    shares: 5,
  },
];

export const Default: Story = {
  args: {
    columns: {
      base: 1,
      lg: 2,
    },
    p: 5,
    spacing: 5,
    items: items,
  },
  render: (args) => <Catalogs {...args} />,
};

export default meta;
