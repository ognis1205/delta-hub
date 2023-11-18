/**
 * @fileoverview Defines @/molecules/NavIconList story.
 * @copyright Shingo OKAWA 2023
 */
import { FaHome, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';

import { Component as NavIconList } from '@/molecules/NavIconList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavIconList',
  component: NavIconList,
} satisfies Meta<typeof NavIconList>;

type Story = StoryObj<typeof meta>;

const items = [
  {
    href: '/',
    popover: 'Home',
    'aria-label': 'Home',
    icon: <FaHome color={'grey'} />,
  },
  {
    href: '/',
    popover: 'Info',
    'aria-label': 'Info',
    icon: <FaInfoCircle color={'grey'} />,
  },
  {
    href: '/',
    popover: 'Question',
    'aria-label': 'Question',
    icon: <FaQuestionCircle color={'grey'} />,
  },
];

export const Default: Story = {
  args: {
    items: items,
    direction: { base: 'column', md: 'row' },
    display: { base: 'none', md: 'flex' },
    width: { base: 'full', md: 'auto' },
    alignItems: 'center',
    flexGrow: 1,
    mt: { base: 4, md: 0 },
  },
  render: (args) => <NavIconList {...args} />,
};

export default meta;
