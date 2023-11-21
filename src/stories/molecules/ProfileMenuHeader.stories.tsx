/**
 * @fileoverview Defines @/molecules/ProfileMenuHeader story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as ProfileMenuHeader } from '@/molecules/ProfileMenuHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ProfileMenuHeader',
  component: ProfileMenuHeader,
} satisfies Meta<typeof ProfileMenuHeader>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'ognis1205',
    name: 'Shingo OKAWA',
    src: '/images/no-image.png',
  },
  render: (args) => <ProfileMenuHeader {...args} />,
};

export default meta;
