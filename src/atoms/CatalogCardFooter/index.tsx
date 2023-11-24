/**
 * @fileoverview Defines Catalog Card Footer atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { HStack, StackProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Icon } from '@/atoms/Icon';

export type Props = Omit<StackProps, keyof Pick<StackProps, 'color' | 'spacing'>> & {
  stars: number;
  shares: number;
};

export const Component: FC<Props> = ({ stars, shares, ...props }: Props) => (
  <HStack {...props} color={'Russian.700'} spacing={10}>
    <HStack gap={'0.25rem'}>
      <Icon iconName={'star'} />
      <Text>{stars}</Text>
    </HStack>
    <HStack gap={'0.25rem'}>
      <Icon iconName={'share'} />
      <Text>{shares}</Text>
    </HStack>
  </HStack>
);

Component.displayName = 'CatalogCardFooter';
