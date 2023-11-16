/**
 * @fileoverview Defines @/organisms/Settle story.
 * @copyright Shingo OKAWA 2023
 */
import { Box } from '@chakra-ui/react';

import { Component as Settle } from '@/organisms/Settle';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Settle',
  component: Settle,
} satisfies Meta<typeof Settle>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Box h={'100vh'}>
      <Settle {...args} />
    </Box>
  ),
};

export default meta;
