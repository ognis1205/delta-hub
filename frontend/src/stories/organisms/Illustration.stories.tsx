/**
 * @fileoverview Defines @/organisms/Illustration story.
 * @copyright Shingo OKAWA 2023
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
