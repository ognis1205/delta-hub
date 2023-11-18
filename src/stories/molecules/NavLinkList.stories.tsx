/**
 * @fileoverview Defines @/molecules/NavLinkList story.
 * @copyright Shingo OKAWA 2023
 */
import { Text } from '@chakra-ui/react';

import { Component as NavLinkList } from '@/molecules/NavLinkList';

import type { Props as NavLinkProps } from '@/atoms/NavLink';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavLinkList',
  component: NavLinkList,
} satisfies Meta<typeof NavLinkList>;

type Story = StoryObj<typeof meta>;

const props = {
  p: 2,
} satisfies NavLinkProps;

const items = [
  {
    ...props,
    href: '/portfolio',
    children: <Text>Portfolio</Text>,
  },
  {
    ...props,
    href: '/timeline',
    children: <Text>Timeline</Text>,
  },
  {
    ...props,
    href: '/contact',
    children: <Text>Contact</Text>,
  },
  {
    ...props,
    isExternal: true,
    href: 'https://github.com/ognis1205/otfsg-io',
    children: <Text>GitHub</Text>,
  },
] satisfies NavLinkProps[];

export const PortfolioIsActive: Story = {
  args: {
    path: '/portfolio',
    activeColor: 'teal',
    items: items,
    direction: { base: 'column', md: 'row' },
    display: { base: 'none', md: 'flex' },
    width: { base: 'full', md: 'auto' },
    alignItems: 'center',
    flexGrow: 1,
    mt: { base: 4, md: 0 },
  },
  render: (args) => <NavLinkList {...args} />,
};

export const TimelineIsActive: Story = {
  args: {
    path: '/timeline',
    activeColor: 'teal',
    items: items,
    direction: { base: 'column', md: 'row' },
    display: { base: 'none', md: 'flex' },
    width: { base: 'full', md: 'auto' },
    alignItems: 'center',
    flexGrow: 1,
    mt: { base: 4, md: 0 },
  },
  render: (args) => <NavLinkList {...args} />,
};

export const ContactIsActive: Story = {
  args: {
    path: '/contact',
    activeColor: 'teal',
    items: items,
    direction: { base: 'column', md: 'row' },
    display: { base: 'none', md: 'flex' },
    width: { base: 'full', md: 'auto' },
    alignItems: 'center',
    flexGrow: 1,
    mt: { base: 4, md: 0 },
  },
  render: (args) => <NavLinkList {...args} />,
};

export default meta;
