/**
 * @fileoverview Defines @/atoms/Image story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
