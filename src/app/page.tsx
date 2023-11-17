/**
 * @fileoverview Defines home.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Container, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Component as LoginForm } from '@/organisms/LoginForm';
import { Component as MainPanel } from '@/organisms/MainPanel';
import { Component as WelcomeArt } from '@/organisms/WelcomeArt';

const Page: NextPage<Record<string, never>> = () => (
  <MainPanel title={'Login'}>
    <Flex flexDir={'row'}>
      <Flex
        align={'center'}
        justify={'center'}
        h={'100vh'}
        w={{ base: '0%', md: '60%' }}
      >
        <WelcomeArt display={{ base: 'none', md: 'flex' }} />
      </Flex>
      <Flex
        align={'center'}
        justify={'center'}
        h={'100vh'}
        w={{ base: '100%', md: '40%' }}
      >
        <LoginForm as={Container} p={8} spacing={6} maxW={'xl'} />
      </Flex>
    </Flex>
  </MainPanel>
);

Page.displayName = 'Home';

export default Page;
