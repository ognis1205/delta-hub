/**
 * @fileoverview Defines Profile Item atom.
 * @copyright Shingo OKAWA 2023
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
