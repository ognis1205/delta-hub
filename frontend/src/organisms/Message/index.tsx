/**
 * @fileoverview Defines Back to Message organism.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Stack, StackProps, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Image } from '@/atoms/Image';

export type Props = Omit<
  StackProps,
  keyof Pick<StackProps, 'align' | 'textAlign'>
> & {
  title: string;
  message: string;
};

export const Component: FC<Props> = ({
  title,
  message,
  children,
  ...props
}: Props) => (
  <Stack align={'center'} textAlign={'center'} {...props}>
    <Image boxSize={150} src={'/images/logo.png'} alt={'Logo'} />
    <Stack spacing={2}>
      <Heading size={'lg'}>{title}</Heading>
      <Text fontSize={'md'}>{message}</Text>
    </Stack>
    <Stack m={2} spacing={2}>
      {children}
    </Stack>
  </Stack>
);

Component.displayName = 'Message';
