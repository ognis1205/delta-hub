/**
 * @fileoverview Defines @/atoms/ProfileHeader story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as ProfileHeader } from '@/atoms/ProfileHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ProfileHeader',
  component: ProfileHeader,
} satisfies Meta<typeof ProfileHeader>;

type Story = StoryObj<typeof meta>;

export const ForProfileDrawer: Story = {
  args: {
    id: 'ognis1205',
    name: 'Shingo OKAWA',
    flexDir: 'row',
    alignItems: 'center',
    avatarSrc: '/images/no-image.png',
    avatarSize: 'sm',
    fontSize: 'sm',
    textAlignItmes: 'start',
    textGap: 0,
  },
  render: (args) => <ProfileHeader {...args} />,
};

export default meta;
