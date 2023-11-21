/**
 * @fileoverview Defines @/organisms/NavBar story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as NavBar } from '@/organisms/NavBar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavBar',
  component: NavBar,
} satisfies Meta<typeof NavBar>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'ognis1205',
    name: 'Shingo OKAWA',
    path: '/this/is/a/test',
  },
  render: (args) => <NavBar {...args} />,
};

export default meta;
