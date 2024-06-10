/**
 * @fileoverview Defines @/organisms/Illustration story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Illustration } from '@/organisms/Illustration';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Illustration',
  component: Illustration,
} satisfies Meta<typeof Illustration>;

type Story = StoryObj<typeof meta>;

export const BackToHome: Story = {
  args: {
    src: '/images/settle-cat.svg',
    alt: 'Not found',
  },
  render: (args) => <Illustration {...args} />,
};

export const Login: Story = {
  args: {
    src: '/images/welcome-cats.svg',
    alt: 'Welcome',
  },
  render: (args) => <Illustration {...args} />,
};

export default meta;
