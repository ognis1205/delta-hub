/**
 * @fileoverview Defines @/atoms/NavLink story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as NavLink } from '@/atoms/NavLink';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavLink',
  component: NavLink,
} satisfies Meta<typeof NavLink>;

type Story = StoryObj<typeof meta>;

export const InternalNavLink: Story = {
  args: {
    href: '/',
  },
  render: (args) => <NavLink {...args}>NavLink</NavLink>,
};

export const ExternalNavLink: Story = {
  args: {
    href: '/',
    isExternal: true,
  },
  render: (args) => <NavLink {...args}>NavLink</NavLink>,
};

export default meta;
