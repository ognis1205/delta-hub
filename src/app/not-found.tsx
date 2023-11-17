/**
 * @fileoverview Defines 404 page.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Container, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Component as BackToHome } from '@/organisms/BackToHome';
import { Component as MainPanel } from '@/organisms/MainPanel';
import { Component as NotFoundArt } from '@/organisms/NotFoundArt';

const Page: NextPage<Record<string, never>> = () => (
  <MainPanel title={'Not Found'}>
    <Flex flexDir={'row'}>
      <Flex
        align={'center'}
        justify={'center'}
        h={'100vh'}
        w={{ base: '0%', md: '60%' }}
      >
        <NotFoundArt display={{ base: 'none', md: 'flex' }} />
      </Flex>
      <Flex
        align={'center'}
        justify={'center'}
        h={'100vh'}
        w={{ base: '100%', md: '40%' }}
      >
        <BackToHome as={Container} p={8} spacing={6} maxW={'xl'} />
      </Flex>
    </Flex>
  </MainPanel>
);

Page.displayName = 'NotFound';

export default Page;
