/**
 * @fileoverview Defines dashboard.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { Heading, Text, Flex } from '@chakra-ui/react';

import { Statistics } from '@/containers/Statistics';
import { Recipients } from '@/containers/Recipients';

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

  const data = [17, 30, 22, 27, 25, 26, 39, 23, 19, 22, 13, 25, 16, 39];

  const recipients = [
    {
      imgSrc:
        session && session.user ? session.user.image : '/images/no-image.png',
      name: session && session.user ? session.user.name : 'N/A',
      date: 'Oct 12, 2023 at 18:00pm',
      share: 'Test Share 1',
      email: session && session.user ? session.user.email : 'N/A',
    },
    {
      imgSrc:
        session && session.user ? session.user.image : '/images/no-image.png',
      name: session && session.user ? session.user.name : 'N/A',
      date: 'Oct 12, 2023 at 18:00pm',
      share: 'Test Share 1',
      email: session && session.user ? session.user.email : 'N/A',
    },
    {
      imgSrc:
        session && session.user ? session.user.image : '/images/no-image.png',
      name: session && session.user ? session.user.name : 'N/A',
      date: 'Oct 12, 2023 at 18:00pm',
      share: 'Test Share 1',
      email: session && session.user ? session.user.email : 'N/A',
    },
  ];

  return (
    <>
      <Heading
        as={'h2'}
        size={'lg'}
        fontWeight="normal"
        mb={4}
        letterSpacing="tight"
      >
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
      <Text fontWeight="bold" fontSize="lg">
        {data.reduce((acc, x) => acc + x, 0)}&nbsp;[#]
      </Text>
      <Statistics data={data} labels={labels} />
      <Recipients monthYear={'Oct 2023'} recipients={recipients} />
    </>
  );
};

Page.displayName = 'Home';

export default Page;
