/**
 * @fileoverview Defines @/organisms/Profile story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Profile } from '@/organisms/Profile';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Profile',
  component: Profile,
} satisfies Meta<typeof Profile>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgSrc: '/images/no-image.png',
    id: 'ognis1205',
    name: 'Shingo OKAWA',
    followers: 24,
    following: 20,
    address: 'Tokyo, Japan',
    email: 'shingo.okawa.g.h.c@gmail.com',
    link: 'https://ognis1205.github.io',
  },
  render: (args) => <Profile {...args} />,
};

export default meta;
