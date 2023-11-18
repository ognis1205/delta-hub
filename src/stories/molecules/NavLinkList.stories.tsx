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
    href: '/item11',
    children: <Text>Item1</Text>,
  },
  {
    ...props,
    href: '/item2',
    children: <Text>Item2</Text>,
  },
  {
    ...props,
    href: '/item3',
    children: <Text>Item3</Text>,
  },
  {
    ...props,
    href: '/item4',
    children: <Text>Item4</Text>,
  },
  {
    ...props,
    href: '/item5',
    children: <Text>Item5</Text>,
  },
  {
    ...props,
    href: '/item6',
    children: <Text>Item6</Text>,
  },
  {
    ...props,
    href: '/item7',
    children: <Text>Item7</Text>,
  },
  {
    ...props,
    href: '/item8',
    children: <Text>Item8</Text>,
  },
  {
    ...props,
    href: '/item9',
    children: <Text>Item9</Text>,
  },
] satisfies NavLinkProps[];

export const Item1IsActive: Story = {
  args: {
    path: '/item1',
    activeColor: 'teal',
    items: items,
    direction: 'row',
    alignItems: 'center',
    flexGrow: 1,
    overflow: 'hidden',
  },
  render: (args) => <NavLinkList {...args} />,
};

export const Item2IsActive: Story = {
  args: {
    path: '/item2',
    activeColor: 'teal',
    items: items,
    direction: 'row',
    alignItems: 'center',
    flexGrow: 1,
    overflow: 'hidden',
  },
  render: (args) => <NavLinkList {...args} />,
};

export const Item3IsActive: Story = {
  args: {
    path: '/item3',
    activeColor: 'teal',
    items: items,
    direction: 'row',
    alignItems: 'center',
    flexGrow: 1,
    overflow: 'hidden',
  },
  render: (args) => <NavLinkList {...args} />,
};

export default meta;
