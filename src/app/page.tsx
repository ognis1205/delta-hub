/**
 * @fileoverview Defines home.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Container, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Component as LoginButton } from '@/atoms/LoginButton';
import { Component as Illustration } from '@/organisms/Illustration';
import { Component as MainPane } from '@/organisms/MainPane';
import { Component as Message } from '@/organisms/Message';

const Page: NextPage<Record<string, never>> = () => (
  <MainPane title={'Login'}>
    <Flex flexDir={'row'}>
      <Flex
        align={'center'}
        justify={'center'}
        h={'100vh'}
        w={{ base: '0%', md: '60%' }}
      >
        <Illustration
          src={'/images/welcome-cats.svg'}
          alt={'Welcome'}
          display={{ base: 'none', md: 'flex' }}
        />
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
          <LoginButton provider={'google'} />
          <LoginButton provider={'github'} />
        </Message>
      </Flex>
    </Flex>
  </MainPane>
);

Page.displayName = 'Home';

export default Page;
