/**
 * @fileoverview Defines @/atoms/Wallpaper story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as Wallpaper } from '@/atoms/Wallpaper';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Wallpaper',
  component: Wallpaper,
} satisfies Meta<typeof Wallpaper>;

type Story = StoryObj<typeof meta>;

export const Wave: Story = {
  args: {
    src: '/images/wave.png',
  },
  render: (args) => <Wallpaper {...args} />,
};

export default meta;
