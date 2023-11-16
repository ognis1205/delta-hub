/**
 * @fileoverview Defines @/atoms/Logo story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as Logo } from '@/atoms/Logo';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Logo',
  component: Logo,
} satisfies Meta<typeof Logo>;

type Story = StoryObj<typeof meta>;

export const DefaultTheme: Story = {
  args: {},
  render: (args) => <Logo {...args} />,
};

export const ThemeWhite: Story = {
  args: { theme: 'white' },
  render: (args) => <Logo {...args} />,
};

export const ThemeBlack: Story = {
  args: { theme: 'black' },
  render: (args) => <Logo {...args} />,
};

export default meta;
