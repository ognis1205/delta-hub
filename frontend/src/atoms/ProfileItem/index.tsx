/**
 * @fileoverview Defines Profile Item atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { HStack, StackProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Icon, Props as IconProps } from '@/atoms/Icon';

export type Props = StackProps & {
  iconName: IconProps['iconName'];
  value: string;
};

export const Component: FC<Props> = ({ iconName, value, ...props }: Props) => (
  <HStack {...props}>
    <Icon iconName={iconName} />
    <Text>{value}</Text>
  </HStack>
);

Component.displayName = 'ProfileItem';
