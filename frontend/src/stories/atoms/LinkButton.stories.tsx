/**
 * @fileoverview Defines @/atoms/LinkButton story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
