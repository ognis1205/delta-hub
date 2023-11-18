/**
 * @fileoverview Defines @/atoms/NavIcon story.
 * @copyright Shingo OKAWA 2023
 */
import { FaHome } from 'react-icons/fa';

import { Component as NavIcon } from '@/atoms/NavIcon';
import { Component as NavLink } from '@/atoms/NavLink';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavIcon',
  component: NavIcon,
} satisfies Meta<typeof NavIcon>;

type Story = StoryObj<typeof meta>;

export const AsIcon: Story = {
  args: {
    popover: 'Popover',
    'aria-label': 'Icon',
    icon: <FaHome color={'grey'} />,
  },
  render: (args) => <NavIcon {...args} />,
};

export const AsLink: Story = {
  args: {
    popover: 'Popover',
    'aria-label': 'Icon',
    icon: <FaHome color={'grey'} />,
  },
  render: (args) => (
    <NavLink href={'/'}>
      <NavIcon {...args} />
    </NavLink>
  ),
};

export default meta;
