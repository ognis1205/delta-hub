/**
 * @fileoverview Defines Home page.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Flex,
  Divider,
  IconButton,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { NextPage } from 'next';

import { Component as CatalogCard } from '@/molecules/CatalogCard';
import { Component as Timeline } from '@/molecules/Timeline';
import { iconOf } from '@/utils/chakra/icons';

const november = [
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

const october = [
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
      Catalog
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} p={5} spacing={5}>
      <CatalogCard
        name={'scientific-data'}
        href={'/'}
        description={'Scientific data for university students'}
        stars={51}
        shares={5}
      />
      <CatalogCard
        name={'covid'}
        href={'/'}
        description={'Official daily counts of COVID-19 cases'}
        stars={151}
        shares={1115}
      />
      <CatalogCard
        name={'scientific-data'}
        href={'/'}
        description={'Scientific data for university students'}
        stars={51}
        shares={5}
      />
      <CatalogCard
        name={'covid'}
        href={'/'}
        description={'Official daily counts of COVID-19 cases'}
        stars={151}
        shares={1115}
      />
      <CatalogCard
        name={'scientific-data'}
        href={'/'}
        description={'Scientific data for university students'}
        stars={51}
        shares={5}
      />
    </SimpleGrid>
    <Heading my={2} size={'sm'}>
      Activity
    </Heading>
    <Timeline month={'November'} year={'2023'} items={november} />
    <Timeline month={'October'} year={'2023'} items={october} />
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
