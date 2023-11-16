/**
 * @fileoverview Defines @/organisms/BAckToHome story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as BackToHome } from '@/organisms/BackToHome';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'BackToHome',
  component: BackToHome,
} satisfies Meta<typeof BackToHome>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <BackToHome {...args} />,
};

export default meta;
