/**
 * @fileoverview Defines Home page.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Flex, Divider, IconButton, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Component as Timeline } from '@/molecules/Timeline';
import { Component as Catalogs } from '@/organisms/Catalogs';
import { iconOf } from '@/utils/chakra/icons';

const catalogs = [
  {
    name: 'scientific-data',
    href: '/',
    description: 'Scientific data for university students',
    stars: 51,
    shares: 5,
  },
  {
    name: 'covid',
    href: '/',
    description: 'Official daily counts of COVID-19 cases',
    stars: 151,
    shares: 1115,
  },
  {
    name: 'scientific-data',
    href: '/',
    description: 'Scientific data for university students',
    stars: 51,
    shares: 5,
  },
  {
    name: 'covid',
    href: '/',
    description: 'Official daily counts of COVID-19 cases',
    stars: 151,
    shares: 1115,
  },
  {
    name: 'scientific-data',
    href: '/',
    description: 'Scientific data for university students',
    stars: 51,
    shares: 5,
  },
];

const novActivity = [
  {
    activity: {
      kind: 'share' as const,
      detail: {
        numCatalog: 3,
        numPeople: 2,
      },
    },
  },
  {
    activity: {
      kind: 'request' as const,
      detail: {
        numCatalog: 3,
        numPeople: 11,
      },
    },
  },
  {
    activity: {
      kind: 'create' as const,
      detail: {
        numCatalog: 2,
      },
    },
  },
];

const octActivity = [
  {
    activity: {
      kind: 'share' as const,
      detail: {
        numCatalog: 4,
        numPeople: 1,
      },
    },
  },
  {
    activity: {
      kind: 'request' as const,
      detail: {
        numCatalog: 2,
        numPeople: 7,
      },
    },
  },
  {
    activity: {
      kind: 'create' as const,
      detail: {
        numCatalog: 0,
      },
    },
  },
];

const Page: NextPage<Record<string, never>> = () => (
  <>
    <Heading my={2} size={'sm'}>
      Catalogs
    </Heading>
    <Catalogs columns={{ base: 1, lg: 2 }} p={5} spacing={5} items={catalogs} />
    <Heading my={2} size={'sm'}>
      Activities
    </Heading>
    <Timeline month={'November'} year={'2023'} items={novActivity} />
    <Timeline month={'October'} year={'2023'} items={octActivity} />
    <Flex align={'center'}>
      <Divider />
      <IconButton
        icon={iconOf('more')}
        size={'sm'}
        isRound={true}
        aria-label={'Show more activities'}
      />
      <Divider />
    </Flex>
  </>
);

Page.displayName = 'HomePage';

export default Page;
