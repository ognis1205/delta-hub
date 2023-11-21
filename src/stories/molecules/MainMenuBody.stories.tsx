/**
 * @fileoverview Defines @/molecules/MainMenuBody story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as MainMenuBody } from '@/molecules/MainMenuBody';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'MainMenuBody',
  component: MainMenuBody,
} satisfies Meta<typeof MainMenuBody>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <MainMenuBody {...args} />,
};

export default meta;
