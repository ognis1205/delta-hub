/**
 * @fileoverview Defines Tab Item atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { HStack, StackProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Icon, Props as IconProps } from '@/atoms/Icon';
import { Component as Link } from '@/atoms/Link';

export type Props = StackProps & {
  href: string;
  iconName: IconProps['iconName'];
  name: string;
};

export const Component: FC<Props> = ({
  href,
  iconName,
  name,
  ...props
}: Props) => (
  <Link href={href} variant={'tab'}>
    <HStack {...props}>
      <Icon iconName={iconName} />
      <Text>{name}</Text>
    </HStack>
  </Link>
);

Component.displayName = 'TabItem';
