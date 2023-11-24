/**
 * @fileoverview Defines Home page.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Flex, Divider, IconButton, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Statistics } from '@/containers/Statistics';
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

const Page: NextPage<Record<string, never>> = () => {
  const labels = [
    'Sep. 29',
    'Sep. 30',
    'Oct. 1',
    'Oct. 2',
    'Oct. 3',
    'Oct. 4',
    'Oct. 5',
    'Oct. 6',
    'Oct. 7',
    'Oct. 8',
    'Oct. 9',
    'Oct. 10',
    'Oct. 11',
    'Oct. 12',
  ];

  const data = [17, 30, 22, 27, 25, 26, 39, 23, 19, 22, 13, 25, 16, 39];

  return (
    <>
      <Heading my={2} size="sm">
        Catalog
      </Heading>
      <Statistics data={data} labels={labels} />
      <Divider />
      <Heading my={2} size="sm">
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
};

Page.displayName = 'HomePage';

export default Page;
