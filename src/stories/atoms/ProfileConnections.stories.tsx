/**
 * @fileoverview Defines @/atoms/ProfileConnections story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as ProfileConnections } from '@/atoms/ProfileConnections';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ProfileConnections',
  component: ProfileConnections,
} satisfies Meta<typeof ProfileConnections>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    following: 20,
    followers: 24,
  },
  render: (args) => <ProfileConnections {...args} />,
};

export default meta;
