/**
 * @fileoverview Defines Back to Home organism.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Stack, StackProps, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as BackToHomeButton } from '@/atoms/BackToHomeButton';
import { Component as LogoImage } from '@/atoms/LogoImage';

export type Props = Omit<
  StackProps,
  keyof Pick<StackProps, 'children' | 'align' | 'textAlign'>
>;

export const Component: FC<Props> = (props: Props) => (
  <Stack align={'center'} textAlign={'center'} {...props}>
    <LogoImage boxSize={150} />
    <Stack spacing={2}>
      <Heading size={'lg'}>Oops! Something went wrong</Heading>
      <Text fontSize={'md'}>
        This page didn&apos;t load DeltaHub correctly.
      </Text>
    </Stack>
    <Stack spacing={2}>
      <BackToHomeButton />
    </Stack>
  </Stack>
);

Component.displayName = 'BackToHome';
