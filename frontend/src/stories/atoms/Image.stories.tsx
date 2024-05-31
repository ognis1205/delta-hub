/**
 * @fileoverview Defines @/atoms/Image story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as Image } from '@/atoms/Image';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Image',
  component: Image,
} satisfies Meta<typeof Image>;

type Story = StoryObj<typeof meta>;

export const NotFoundImage: Story = {
  args: {
    src: '/images/settle-cat.svg',
    alt: 'Not found',
  },
  // eslint-disable-next-line jsx-a11y/alt-text
  render: (args) => <Image {...args} />,
};

export const WelcomeImage: Story = {
  args: {
    src: '/images/welcome-cats.svg',
    alt: 'Welcome',
  },
  // eslint-disable-next-line jsx-a11y/alt-text
  render: (args) => <Image {...args} />,
};

export default meta;
