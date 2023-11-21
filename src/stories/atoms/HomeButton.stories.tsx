/**
 * @fileoverview Defines @/atoms/HomeButton story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as HomeButton } from '@/atoms/HomeButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'HomeButton',
  component: HomeButton,
} satisfies Meta<typeof HomeButton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <HomeButton {...args} />,
};

export const SizeExtraSmall: Story = {
  args: {
    size: 'xs',
  },
  render: (args) => <HomeButton {...args} />,
};

export const SizeSmall: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => <HomeButton {...args} />,
};

export const SizeMedium: Story = {
  args: {
    size: 'md',
  },
  render: (args) => <HomeButton {...args} />,
};

export const SizeLarge: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => <HomeButton {...args} />,
};

export default meta;
