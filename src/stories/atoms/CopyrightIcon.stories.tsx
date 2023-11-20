/**
 * @fileoverview Defines @/atoms/CopyrightIcon story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as CopyrightIcon } from '@/atoms/CopyrightIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CopyrightIcon',
  component: CopyrightIcon,
} satisfies Meta<typeof CopyrightIcon>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <CopyrightIcon {...args} />,
};

export default meta;
