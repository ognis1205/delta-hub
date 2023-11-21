/**
 * @fileoverview Defines Profile Menu Header molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Box, VStack, Avatar, Text } from '@chakra-ui/react';
import { FC } from 'react';

export type Props = {
  id: string;
  name: string;
  src?: string;
};

export const Component: FC<Props> = ({ id, name, src = undefined }: Props) => (
  <Box display={'flex'} alignItems={'center'}>
    <Avatar size={'sm'} name={name} src={src} />
    <VStack ml={2} gap={0} alignItems={'start'}>
      <Text fontSize={'sm'} fontWeight={'bold'}>
        {id}
      </Text>
      <Text fontSize={'sm'} color={'SonicSilver.700'}>
        {name}
      </Text>
    </VStack>
  </Box>
);

Component.displayName = 'ProfileMenuHeader';
