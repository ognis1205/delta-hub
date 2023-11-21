/**
 * @fileoverview Defines @/molecules/ProfileDrawer story.
 * @copyright Shingo OKAWA 2023
 */
import { Text } from '@chakra-ui/react';

import { Component as Copyright } from '@/molecules/Copyright';
import { Component as ProfileDrawer } from '@/molecules/ProfileDrawer';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ProfileDrawer',
  component: ProfileDrawer,
} satisfies Meta<typeof ProfileDrawer>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placement: 'left',
    src: '/images/no-image.png',
    size: 'sm',
    name: 'John Doe',
    header: <Text>Header</Text>,
    body: <Text>Body</Text>,
    footer: <Copyright fontSize={'xs'} color={'SonicSilver.500'} />,
    'aria-label': 'Open drawer',
  },
  render: (args) => <ProfileDrawer {...args} />,
};

export const NoSource: Story = {
  args: {
    placement: 'left',
    size: 'sm',
    name: 'John Doe',
    header: <Text>Header</Text>,
    body: <Text>Body</Text>,
    footer: <Copyright fontSize={'xs'} color={'SonicSilver.500'} />,
    'aria-label': 'Open drawer',
  },
  render: (args) => <ProfileDrawer {...args} />,
};

export default meta;
