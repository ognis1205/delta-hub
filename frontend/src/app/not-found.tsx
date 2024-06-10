/**
 * @fileoverview Defines Not Found page.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Container, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Component as LinkButton } from '@/atoms/LinkButton';
import { Component as Illustration } from '@/organisms/Illustration';
import { Component as MainPane } from '@/organisms/MainPane';
import { Component as Message } from '@/organisms/Message';

const Page: NextPage<Record<string, never>> = () => (
  <MainPane title={'Not Found'}>
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
  </MainPane>
);

Page.displayName = 'NotFoundPage';

export default Page;
