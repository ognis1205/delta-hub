/**
 * @fileoverview Defines @/atoms/MenuItem story.
 * @copyright Shingo OKAWA 2023
 */
import { Text, Icon, HStack } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

import { Component as MenuItem } from '@/atoms/MenuItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'MenuItem',
  component: MenuItem,
} satisfies Meta<typeof MenuItem>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/',
  },
  render: (args) => (
    <MenuItem {...args}>
      <HStack>
        <Icon as={FaHome} />
        <Text>Item1</Text>
      </HStack>
    </MenuItem>
  ),
};

export default meta;
