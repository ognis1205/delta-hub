/**
 * @fileoverview Defines @/organisms/Welcome story.
 * @copyright Shingo OKAWA 2023
 */
import { Box } from '@chakra-ui/react';

import { Component as Welcome } from '@/organisms/Welcome';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Welcome',
  component: Welcome,
} satisfies Meta<typeof Welcome>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Box h={'100vh'}>
      <Welcome {...args} />
    </Box>
  ),
};

export default meta;
