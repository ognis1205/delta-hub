/**
 * @fileoverview Defines @/atoms/LogoImage story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as LogoImage } from '@/atoms/LogoImage';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'LogoImage',
  component: LogoImage,
} satisfies Meta<typeof LogoImage>;

type Story = StoryObj<typeof meta>;

export const DefaultTheme: Story = {
  args: {},
  render: (args) => <LogoImage {...args} />,
};

export const ThemeWhite: Story = {
  args: { theme: 'white' },
  render: (args) => <LogoImage {...args} />,
};

export const ThemeBlack: Story = {
  args: { theme: 'black' },
  render: (args) => <LogoImage {...args} />,
};

export default meta;
