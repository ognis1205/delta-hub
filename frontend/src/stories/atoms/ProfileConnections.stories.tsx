/**
 * @fileoverview Defines @/atoms/ProfileConnections story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
