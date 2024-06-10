/**
 * @fileoverview Defines @/atoms/Logo story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as Logo } from '@/atoms/Logo';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Logo',
  component: Logo,
} satisfies Meta<typeof Logo>;

type Story = StoryObj<typeof meta>;

export const TwoExtraSmall: Story = {
  args: {
    size: '2xs',
  },
  render: (args) => <Logo {...args} />,
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
  render: (args) => <Logo {...args} />,
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => <Logo {...args} />,
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
  render: (args) => <Logo {...args} />,
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => <Logo {...args} />,
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
  render: (args) => <Logo {...args} />,
};

export const TwoExtraLarge: Story = {
  args: {
    size: '2xl',
  },
  render: (args) => <Logo {...args} />,
};

export const Full: Story = {
  args: {
    size: 'full',
  },
  render: (args) => <Logo {...args} />,
};

export default meta;
