/**
 * @fileoverview Defines 404 page.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Container, Flex, Show } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Component as BackToHome } from '@/organisms/BackToHome';
import { Component as Settle } from '@/organisms/Settle';

const Page: NextPage<Record<string, never>> = () => (
  <Flex flexDir={'row'}>
    <Show above="md">
      <Flex
        align={'center'}
        justify={'center'}
        h={'100vh'}
        w={['0%', '0%', '60%']}
      >
        <Settle />
      </Flex>
    </Show>
    <Flex
      align={'center'}
      justify={'center'}
      h={'100vh'}
      w={['100%', '100%', '40%']}
    >
      <BackToHome as={Container} p={8} spacing={6} maxW={'xl'} />
    </Flex>
  </Flex>
);

Page.displayName = 'NotFound';

export default Page;
