/**
 * @fileoverview Defines @/molecules/NavLinkList story.
 * @copyright Shingo OKAWA 2023
 */
import { Text, Icon, HStack } from '@chakra-ui/react';
import { FaHome, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';

import { Component as NavLinkList } from '@/molecules/NavLinkList';

import type { Props as NavLinkProps } from '@/atoms/NavLink';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavLinkList',
  component: NavLinkList,
} satisfies Meta<typeof NavLinkList>;

type Story = StoryObj<typeof meta>;

const items = [
  {
    href: '/item1',
    children: (
      <HStack>
        <Icon as={FaHome} />
        <Text>Item1</Text>
      </HStack>
    ),
  },
  {
    href: '/item2',
    children: (
      <HStack>
        <Icon as={FaInfoCircle} />
        <Text>Item2</Text>
      </HStack>
    ),
  },
  {
    href: '/item3',
    children: (
      <HStack>
        <Icon as={FaQuestionCircle} />
        <Text>Item3</Text>
      </HStack>
    ),
  },
  {
    href: '/item4',
    children: (
      <HStack>
        <Icon as={FaHome} />
        <Text>Item4</Text>
      </HStack>
    ),
  },
  {
    href: '/item5',
    children: (
      <HStack>
        <Icon as={FaInfoCircle} />
        <Text>Item5</Text>
      </HStack>
    ),
  },
  {
    href: '/item6',
    children: (
      <HStack>
        <Icon as={FaQuestionCircle} />
        <Text>Item6</Text>
      </HStack>
    ),
  },
  {
    href: '/item7',
    children: (
      <HStack>
        <Icon as={FaHome} />
        <Text>Item7</Text>
      </HStack>
    ),
  },
  {
    href: '/item8',
    children: (
      <HStack>
        <Icon as={FaInfoCircle} />
        <Text>Item8</Text>
      </HStack>
    ),
  },
  {
    href: '/item9',
    children: (
      <HStack>
        <Icon as={FaQuestionCircle} />
        <Text>Item9</Text>
      </HStack>
    ),
  },
] satisfies NavLinkProps[];

export const Item1IsActive: Story = {
  args: {
    path: '/item1',
    items: items,
    direction: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  render: (args) => <NavLinkList {...args} />,
};

export const Item2IsActive: Story = {
  args: {
    path: '/item2',
    items: items,
    direction: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  render: (args) => <NavLinkList {...args} />,
};

export const Item3IsActive: Story = {
  args: {
    path: '/item3',
    items: items,
    direction: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  render: (args) => <NavLinkList {...args} />,
};

export default meta;
