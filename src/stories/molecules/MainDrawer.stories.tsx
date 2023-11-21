/**
 * @fileoverview Defines @/molecules/MainDrawer story.
 * @copyright Shingo OKAWA 2023
 */
import { Text } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';

import { Component as Copyright } from '@/molecules/Copyright';
import { Component as MainDrawer } from '@/molecules/MainDrawer';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'MainDrawer',
  component: MainDrawer,
} satisfies Meta<typeof MainDrawer>;

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
  render: (args) => <MainDrawer {...args} />,
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
  render: (args) => <MainDrawer {...args} />,
};

export default meta;
