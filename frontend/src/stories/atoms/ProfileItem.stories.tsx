/**
 * @fileoverview Defines @/atoms/ProfileItem story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as ProfileItem } from '@/atoms/ProfileItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ProfileItem',
  component: ProfileItem,
} satisfies Meta<typeof ProfileItem>;

type Story = StoryObj<typeof meta>;

export const Map: Story = {
  args: {
    iconName: 'map',
    value: 'Tokyo, Japan',
  },
  render: (args) => <ProfileItem {...args} />,
};

export const Email: Story = {
  args: {
    iconName: 'email',
    value: 'shingo.okawa.g.h.c@gmail.com',
  },
  render: (args) => <ProfileItem {...args} />,
};

export const Link: Story = {
  args: {
    iconName: 'link',
    value: 'https://ognis1205.github.io',
  },
  render: (args) => <ProfileItem {...args} />,
};

export default meta;
