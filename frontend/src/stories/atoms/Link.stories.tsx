/**
 * @fileoverview Defines @/atoms/Link story.
 * @copyright Shingo OKAWA 2023
 */
import { Component as Link } from '@/atoms/Link';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Link',
  component: Link,
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof meta>;

export const InternalLinkDefault: Story = {
  args: {
    href: '/',
  },
  render: (args) => <Link {...args}>Link</Link>,
};

export const InternalLinkAsNavigation: Story = {
  args: {
    href: '/',
  },
  render: (args) => (
    <Link {...args} variant={'nav'}>
      Link
    </Link>
  ),
};

export const ExternalLink: Story = {
  args: {
    href: '/',
    isExternal: true,
  },
  render: (args) => <Link {...args}>Link</Link>,
};

export default meta;
