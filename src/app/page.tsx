/**
 * @fileoverview Defines home.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Container, Flex, Show } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Component as LoginForm } from '@/organisms/LoginForm';
import { Component as Welcome } from '@/organisms/Welcome';

const Page: NextPage<Record<string, never>> = () => (
  <Flex flexDir={'row'}>
    <Show above="md">
      <Flex
        align={'center'}
        justify={'center'}
        h={'100vh'}
        w={['0%', '0%', '60%']}
      >
        <Welcome />
      </Flex>
    </Show>
    <Flex
      align={'center'}
      justify={'center'}
      h={'100vh'}
      w={['100%', '100%', '40%']}
    >
      <LoginForm as={Container} p={8} spacing={6} maxW={'xl'} />
    </Flex>
  </Flex>
);

Page.displayName = 'Home';

export default Page;
