/**
 * @fileoverview Defines @/atoms/Link story.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
