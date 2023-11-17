/**
 * @fileoverview Defines @/organisms/NotFoundArt story.
 * @copyright Shingo OKAWA 2023
 */
import { Box } from '@chakra-ui/react';

import { Component as NotFoundArt } from '@/organisms/NotFoundArt';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NotFoundArt',
  component: NotFoundArt,
} satisfies Meta<typeof NotFoundArt>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Box h={'100vh'}>
      <NotFoundArt {...args} />
    </Box>
  ),
};

export default meta;
