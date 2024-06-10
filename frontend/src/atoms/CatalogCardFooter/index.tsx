/**
 * @fileoverview Defines Catalog Card Footer atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { HStack, StackProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Icon } from '@/atoms/Icon';

export type Props = Omit<
  StackProps,
  keyof Pick<StackProps, 'color' | 'spacing'>
> & {
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
