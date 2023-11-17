/**
 * @fileoverview Defines Login Form organism.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Stack, StackProps, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as LogoImage } from '@/atoms/LogoImage';
import { Component as GithubSignIn } from '@/molecules/GithubSignIn';
import { Component as GoogleSignIn } from '@/molecules/GoogleSignIn';

export type Props = Omit<
  StackProps,
  keyof Pick<StackProps, 'children' | 'align' | 'textAlign'>
>;

export const Component: FC<Props> = (props: Props) => (
  <Stack align={'center'} textAlign={'center'} {...props}>
    <LogoImage boxSize={150} />
    <Stack spacing={2}>
      <Heading size={'lg'}>Log in to your account</Heading>
      <Text fontSize={'md'}>Start sharing your thoughts and data</Text>
    </Stack>
    <Stack spacing={2}>
      <GoogleSignIn />
      <GithubSignIn />
    </Stack>
  </Stack>
);

Component.displayName = 'LoginForm';
