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
import { iconOf } from '@/utils/chakra/icons';

export type ActivityKind = 'share' | 'request' | 'create';

export type ShareDetail = {
  numCatalog: number;
  numPeople: number;
};

export type RequestDetail = {
  numCatalog: number;
  numPeople: number;
};

export type CreateDetail = {
  numCatalog: number;
};

export type ActivityDetail = ShareDetail | RequestDetail | CreateDetail;

export type Activity = {
  kind: ActivityKind;
  detail: ActivityDetail;
};

const textize = (activity: Activity) => {
  switch (activity.kind) {
    case 'share':
      return `Shared ${activity.detail.numCatalog ?? 0} catalog(s) with ${
        activity.detail.numPeople ?? 0
      } people(person)`;
    case 'request':
      return `Requested ${activity.detail.numCatalog ?? 0} catalog(s) from ${
        activity.detail.numPeople ?? 0
      } people(person)`;
    case 'create':
      return `Created ${activity.detail.numCatalog ?? 0} new catalog(s)`;
    default:
      return 'N/A';
  }
};

export type Props = BoxProps & {
  activity: Activity;
  skipTrail?: boolean;
};

export const Component: FC<Props> = ({
  activity,
  skipTrail = false,
  ...props
}: Props) => (
  <Flex minH={20}>
    <Flex flexDir={'column'} alignItems={'center'} mr={2} pos={'relative'}>
      <IconButton
        icon={iconOf(activity.kind)}
        size={'sm'}
        isRound={true}
        aria-label={'Timeline event'}
      />
      {!skipTrail && <Box w={'1px'} flex={1} bg={'SonicSilver.600'} my={1} />}
    </Flex>
    <Box {...props} w={'100%'} pt={1}>
      <HStack>
        <Box>{textize(activity)}</Box>
        <Spacer />
        <Icon iconName={'expand'} />
      </HStack>
    </Box>
  </Flex>
);

Component.displayName = 'TimelineItem';
