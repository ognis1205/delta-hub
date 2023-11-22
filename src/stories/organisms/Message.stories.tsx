/**
 * @fileoverview Defines @/organisms/Message story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as LinkButton } from '@/atoms/LinkButton';
import { Component as SocialLogin } from '@/molecules/SocialLogin';
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
      <SocialLogin provider={'google'} />
      <SocialLogin provider={'github'} />
    </Message>
  ),
};

export default meta;
