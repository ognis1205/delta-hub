/**
 * @fileoverview Defines @/atoms/GithubIcon story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as GithubIcon } from '@/atoms/GithubIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'GithubIcon',
  component: GithubIcon,
} satisfies Meta<typeof GithubIcon>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <GithubIcon {...args} />,
};

export default meta;
