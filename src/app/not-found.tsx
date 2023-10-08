/**
 * @fileoverview Defines root layout.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { FC } from 'react';
import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';

import { Logo } from '@/components/Logo';
import { GoogleSignIn } from '@/components/GoogleSignIn';

const Page: FC<Record<string, never>> = () => (
  <Flex align={'center'} justify={'center'} h={'100vh'} w={'full'}>
    <Stack
      as={Container}
      p={8}
      spacing={6}
      maxW={'lg'}
      align={'center'}
      textAlign={'center'}>
      <Logo boxSize={[100, 150, 200]} />
      <GoogleSignIn variant={'outline'} />
      <Stack spacing={2}>
        <Heading>Oops! Something went wrong</Heading>
        <Text>
          This page didn&apos;t load Delta Catalog correctly. See the JavaScript console for technical details.
        </Text>
      </Stack>
      <Flex>
        <Button
          href="/"
          colorScheme={'deltaColor1'}
          rounded={'full'}
          as={Link}>
          Back to home
        </Button>
      </Flex>
    </Stack>
  </Flex>
);

Page.displayName = 'NotFound';

export default Page;
