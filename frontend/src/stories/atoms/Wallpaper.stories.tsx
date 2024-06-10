/**
 * @fileoverview Defines @/atoms/Wallpaper story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
