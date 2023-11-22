/**
 * @fileoverview Defines Back to Home organism.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Stack, StackProps, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Image } from '@/atoms/Image';
import { Component as LinkButton } from '@/atoms/LinkButton';

export type Props = Omit<
  StackProps,
  keyof Pick<StackProps, 'children' | 'align' | 'textAlign'>
>;

export const Component: FC<Props> = (props: Props) => (
  <Stack align={'center'} textAlign={'center'} {...props}>
    <Image boxSize={150} src={'/images/logo.png'} alt={'Logo'} />
    <Stack spacing={2}>
      <Heading size={'lg'}>Oops! Something went wrong</Heading>
      <Text fontSize={'md'}>
        This page didn&apos;t load DeltaHub correctly.
      </Text>
    </Stack>
    <Stack spacing={2}>
      <LinkButton href={'/'}>Back to home</LinkButton>
    </Stack>
  </Stack>
);

Component.displayName = 'BackToHome';
