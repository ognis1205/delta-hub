/**
 * @fileoverview Defines Timeline Item atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Flex,
  HStack,
  Spacer,
  Box,
  BoxProps,
  IconButton,
} from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Icon } from '@/atoms/Icon';
import { IconName, iconOf } from '@/utils/chakra/icons';

export type Props = BoxProps & {
  iconName: IconName;
  skipTrail?: boolean;
};

export const Component: FC<Props> = ({
  iconName,
  skipTrail = false,
  children,
  ...props
}: Props) => (
  <Flex minH={20}>
    <Flex flexDir={'column'} alignItems={'center'} mr={2} pos={'relative'}>
      <IconButton icon={iconOf(iconName)} size={'sm'} isRound={true} aria-label={'Timeline event'} />
      {!skipTrail && <Box w={'1px'} flex={1} bg={'SonicSilver.600'} my={1} />}
    </Flex>
    <Box {...props} w={'100%'} pt={1}>
      <HStack>
        <Box>{children}</Box>
        <Spacer />
        <Icon iconName={'expand'} />
      </HStack>
    </Box>
  </Flex>
);

Component.displayName = 'TimelineItem';
