/**
 * @fileoverview Defines @/organisms/Message story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { Component as LinkButton } from '@/atoms/LinkButton';
import { Component as LoginButton } from '@/atoms/LoginButton';
import { Component as Message } from '@/organisms/Message';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Message',
  component: Message,
} satisfies Meta<typeof Message>;

type Story = StoryObj<typeof meta>;

export const BackToHome: Story = {
  args: {
    title: 'Oops! Something went wrong',
    message: "This page didn't load DeltaHub correctly.",
  },
  render: (args) => (
    <Message {...args}>
      <LinkButton href={'/'}>Back to home</LinkButton>
    </Message>
  ),
};

export const Login: Story = {
  args: {
    title: 'Log in to your account',
    message: 'Start sharing your thoughts and data',
  },
  render: (args) => (
    <Message {...args}>
      <LoginButton provider={'google'} />
      <LoginButton provider={'github'} />
    </Message>
  ),
};

export default meta;
