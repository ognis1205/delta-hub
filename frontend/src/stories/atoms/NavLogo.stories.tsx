/**
 * @fileoverview Defines @/atoms/NavLogo story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as NavLogo } from '@/atoms/NavLogo';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavLogo',
  component: NavLogo,
} satisfies Meta<typeof NavLogo>;

type Story = StoryObj<typeof meta>;

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
  render: (args) => <NavLogo {...args} />,
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => <NavLogo {...args} />,
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
  render: (args) => <NavLogo {...args} />,
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => <NavLogo {...args} />,
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
  render: (args) => <NavLogo {...args} />,
};

export default meta;
