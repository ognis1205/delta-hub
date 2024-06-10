/**
 * @fileoverview Defines Timeline Item atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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

const catalogToPlural = (n: number) => {
  if (n <= 1) {
    return `${n} catalog`;
  }
  return `${n} catalogs`;
};

const personToPlural = (n: number) => {
  if (n <= 1) {
    return `${n} person`;
  }
  return `${n} people`;
};

const textize = (activity: Activity) => {
  switch (activity.kind) {
    case 'share':
      return `Shared ${catalogToPlural(
        activity.detail.numCatalog ?? 0,
      )} with ${personToPlural(
        (activity.detail as ShareDetail).numPeople ?? 0,
      )}`;
    case 'request':
      return `Requested ${catalogToPlural(
        activity.detail.numCatalog ?? 0,
      )} from ${personToPlural(
        (activity.detail as ShareDetail).numPeople ?? 0,
      )}`;
    case 'create':
      return `Created ${catalogToPlural(activity.detail.numCatalog ?? 0)}`;
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
  <Flex minH={!skipTrail ? 20 : undefined}>
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
