/**
 * @fileoverview Defines Not Found page.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Container, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Component as LinkButton } from '@/atoms/LinkButton';
import { Component as Illustration } from '@/organisms/Illustration';
import { Component as MainPanel } from '@/organisms/MainPanel';
import { Component as Message } from '@/organisms/Message';

const Page: NextPage<Record<string, never>> = () => (
  <MainPanel title={'Not Found'}>
    <Flex flexDir={'row'}>
      <Flex
        align={'center'}
        justify={'center'}
        h={'100vh'}
        w={{ base: '0%', md: '60%' }}
      >
        <Illustration
          src={'/images/settle-cat.svg'}
          alt={'Not found'}
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
          title={'Oops! Something went wrong'}
          message={"This page didn't load DeltaHub correctly."}
        >
          <LinkButton href={'/'}>Back to home</LinkButton>
        </Message>
      </Flex>
    </Flex>
  </MainPanel>
);

Page.displayName = 'NotFoundPage';

export default Page;
