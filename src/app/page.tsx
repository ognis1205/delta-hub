/**
 * @fileoverview Defines home.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Box,
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  useToken,
} from '@chakra-ui/react';
import { NextPage } from 'next';

import { GoogleSignIn } from '@/components/GoogleSignIn';
import { Logo } from '@/components/Logo';

const Page: NextPage<Record<string, never>> = () => {
  const [deltaColor1_500, deltaColor2_500] = useToken('colors', [
    'deltaColor1.500',
    'deltaColor2.500',
  ]);

  return (
    <Box
      color={'white'}
      bg={`linear-gradient(75deg, ${deltaColor1_500} 0%, ${deltaColor1_500} 50%, ${deltaColor2_500} 50%, ${deltaColor2_500} 100%)`}
    >
      <Flex as="header" position="fixed" w="100%">
        <Heading p={8} size={'3xl'}>
          Delta Catalog
        </Heading>
      </Flex>
      <Flex align={'center'} justify={'center'} h={'100vh'} w={'full'}>
        <Stack
          as={Container}
          p={8}
          spacing={6}
          maxW={'lg'}
          align={'center'}
          textAlign={'center'}
        >
          <Logo boxSize={100} color={'white'} />
          <Stack spacing={2}>
            <Heading size={'md'}>Log in to your account</Heading>
            <Text fontSize={'sm'}>Start sharing your thoughts and data</Text>
          </Stack>
          <Flex>
            <GoogleSignIn />
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

Page.displayName = 'NotFound';

export default Page;
