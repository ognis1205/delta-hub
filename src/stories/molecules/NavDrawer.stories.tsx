/**
 * @fileoverview Defines @/molecules/NavDrawer story.
 * @copyright Shingo OKAWA 2023
 */
import { Text } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';

import { Component as Copyright } from '@/molecules/Copyright';
import { Component as NavDrawer } from '@/molecules/NavDrawer';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavDrawer',
  component: NavDrawer,
} satisfies Meta<typeof NavDrawer>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placement: 'left',
    icon: <MdMenu />,
    header: <Text>Header</Text>,
    body: <Text>Body</Text>,
    footer: <Copyright fontSize={'xs'} color={'SonicSilver.500'} />,
    'aria-label': 'Open drawer',
  },
  render: (args) => <NavDrawer {...args} />,
};

export const AsNavigation: Story = {
  args: {
    variant: 'nav',
    placement: 'left',
    icon: <MdMenu />,
    header: <Text>Header</Text>,
    body: <Text>Body</Text>,
    footer: <Copyright fontSize={'xs'} color={'SonicSilver.500'} />,
    'aria-label': 'Open drawer',
  },
  render: (args) => <NavDrawer {...args} />,
};

export default meta;
