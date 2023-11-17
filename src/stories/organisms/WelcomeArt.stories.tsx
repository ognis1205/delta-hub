/**
 * @fileoverview Defines @/organisms/WelcomeArt story.
 * @copyright Shingo OKAWA 2023
 */
import { Box } from '@chakra-ui/react';

import { Component as WelcomeArt } from '@/organisms/WelcomeArt';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'WelcomeArt',
  component: WelcomeArt,
} satisfies Meta<typeof WelcomeArt>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Box h={'100vh'}>
      <WelcomeArt {...args} />
    </Box>
  ),
};

export default meta;
