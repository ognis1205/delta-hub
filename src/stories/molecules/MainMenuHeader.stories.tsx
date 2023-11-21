/**
 * @fileoverview Defines @/molecules/MainMenuHeader story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as MainMenuHeader } from '@/molecules/MainMenuHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'MainMenuHeader',
  component: MainMenuHeader,
} satisfies Meta<typeof MainMenuHeader>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <MainMenuHeader {...args} />,
};

export default meta;
