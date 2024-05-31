/**
 * @fileoverview Defines @/atoms/ProfileItem story.
 * @copyright Shingo OKAWA 2023
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
