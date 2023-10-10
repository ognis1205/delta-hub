/**
 * @fileoverview Defines dashboard.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { Heading, Text, Flex } from '@chakra-ui/react';

import { ShareStats } from '@/containers/ShareStats';

const Page: NextPage<Record<string, never>> = () => {
  const { data: session } = useSession();

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

  const stats = [17, 30, 22, 27, 25, 26, 39, 23, 19, 22, 13, 25, 16, 39];

  return (
    <>
      <Heading size={'md'} fontWeight="normal" mb={4} letterSpacing="tight">
        Welcome back,&nbsp;
        {session && session.user && (
          <Flex display="inline-flex" fontWeight="bold">
            {session.user.name}
          </Flex>
        )}
      </Heading>
      <Text color="gray" fontSize="sm">
        Your Shares
      </Text>
      <Text fontWeight="bold" fontSize="lg">{stats.reduce((acc, x) => acc + x, 0)}&nbsp;[#]</Text>
      <ShareStats stats={stats} labels={labels} />
    </>
  );
};

Page.displayName = 'Home';

export default Page;
