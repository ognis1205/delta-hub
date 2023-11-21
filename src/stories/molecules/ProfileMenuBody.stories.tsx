/**
 * @fileoverview Defines @/molecules/ProfileMenuBody story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as ProfileMenuBody } from '@/molecules/ProfileMenuBody';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ProfileMenuBody',
  component: ProfileMenuBody,
} satisfies Meta<typeof ProfileMenuBody>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <ProfileMenuBody {...args} />,
};

export default meta;
