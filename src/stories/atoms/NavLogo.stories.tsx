/**
 * @fileoverview Defines @/atoms/NavLogo story.
 * @copyright Shingo OKAWA 2023
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
