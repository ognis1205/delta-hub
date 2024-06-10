/**
 * @fileoverview Defines Profile Connections atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { HStack, StackProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Icon } from '@/atoms/Icon';

export type Props = StackProps & {
  following: number;
  followers: number;
};

export const Component: FC<Props> = ({
  following,
  followers,
  ...props
}: Props) => (
  <HStack {...props}>
    <Icon iconName={'connection'} />
    <HStack gap={'0.25rem'}>
      <Text fontWeight={'bold'}>{followers}</Text>
      <Text>followers</Text>
    </HStack>
    <Text>&middot;</Text>
    <HStack gap={'0.25rem'}>
      <Text fontWeight={'bold'}>{following}</Text>
      <Text>following</Text>
    </HStack>
  </HStack>
);

Component.displayName = 'ProfileConnections';
