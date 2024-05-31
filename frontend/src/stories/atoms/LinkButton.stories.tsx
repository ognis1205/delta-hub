/**
 * @fileoverview Defines @/atoms/LinkButton story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as LinkButton } from '@/atoms/LinkButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'LinkButton',
  component: LinkButton,
} satisfies Meta<typeof LinkButton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/',
  },
  render: (args) => <LinkButton {...args}>LinkButton</LinkButton>,
};

export default meta;
