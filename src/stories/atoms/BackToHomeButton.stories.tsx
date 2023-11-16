/**
 * @fileoverview Defines @/atoms/BackToHomeButton story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as BackToHomeButton } from '@/atoms/BackToHomeButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'BackToHomeButton',
  component: BackToHomeButton,
} satisfies Meta<typeof BackToHomeButton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <BackToHomeButton {...args} />,
};

export default meta;
