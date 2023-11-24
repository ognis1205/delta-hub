/**
 * @fileoverview Defines Profile Name atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { VStack, StackProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

export type Props = Omit<
  StackProps,
  keyof Pick<StackProps, 'alignItems' | 'gap'>
> & {
  id: string;
  name: string;
};

export const Component: FC<Props> = ({ id, name, ...props }: Props) => (
  <VStack {...props} alignItems={'start'} gap={0}>
    <Text fontSize={'xl'} fontWeight={'bold'}>
      {name}
    </Text>
    <Text fontSize={'xl'} color={'SonicSilver.700'}>
      {id}
    </Text>
  </VStack>
);

Component.displayName = 'ProfileName';
