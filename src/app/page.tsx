/**
 * @fileoverview Defines home.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Container, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Component as GithubSignIn } from '@/molecules/GithubSignIn';
import { Component as GoogleSignIn } from '@/molecules/GoogleSignIn';
import { Component as MainPanel } from '@/organisms/MainPanel';
import { Component as Message } from '@/organisms/Message';
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
        <Message
          as={Container}
          title={'Log in to your account'}
          message={'Start sharing your thoughts and data'}
        >
          <GoogleSignIn />
          <GithubSignIn />
        </Message>
      </Flex>
    </Flex>
  </MainPanel>
);

Page.displayName = 'Home';

export default Page;
