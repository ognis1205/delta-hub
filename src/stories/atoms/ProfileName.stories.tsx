/**
 * @fileoverview Defines @/atoms/ProfileName story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as ProfileName } from '@/atoms/ProfileName';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ProfileName',
  component: ProfileName,
} satisfies Meta<typeof ProfileName>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'ognis1205',
    name: 'Shingo OKAWA',
  },
  render: (args) => <ProfileName {...args} />,
};

export default meta;
