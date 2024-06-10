/**
 * @fileoverview Defines @/atoms/ProfileHeader story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
