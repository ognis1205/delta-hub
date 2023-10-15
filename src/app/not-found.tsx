/**
 * @fileoverview Defines 404 page.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';

import { Logo } from '@/components/Logo';

const Page: NextPage<Record<string, never>> = () => (
  <Flex align={'center'} justify={'center'} h={'100vh'} w={'full'}>
    <Stack
      as={Container}
      p={8}
      spacing={6}
      maxW={'lg'}
      align={'center'}
      textAlign={'center'}
    >
      <Logo boxSize={100} />
      <Stack spacing={2}>
        <Heading size={'md'}>Oops! Something went wrong</Heading>
        <Text fontSize={'sm'}>
          This page didn&apos;t load Delta Catalog correctly.
        </Text>
      </Stack>
      <Flex>
        <Button
          href={'/'}
          colorScheme={'deltaColor1'}
          rounded={'full'}
          as={Link}
        >
          Back to home
        </Button>
      </Flex>
    </Stack>
  </Flex>
);

Page.displayName = 'NotFound';

export default Page;
