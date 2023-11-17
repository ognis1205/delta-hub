/**
 * @fileoverview Defines @/atoms/NavIcon story.
 * @copyright Shingo OKAWA 2023
 */
import { FaHome } from 'react-icons/fa';

import { Component as NavIcon } from '@/atoms/NavIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavIcon',
  component: NavIcon,
} satisfies Meta<typeof NavIcon>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    popover: 'Popover',
    'aria-label': 'Icon',
    icon: <FaHome color={'grey'} />,
  },
  render: (args) => <NavIcon {...args} />,
};

export default meta;
