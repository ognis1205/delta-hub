/**
 * @fileoverview Defines Back to Profile organism.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Stack,
  StackProps,
  Heading,
  Text,
  Avatar,
  Divider,
} from '@chakra-ui/react';
import { FC } from 'react';

import { Component as ProfileName } from '@/atoms/ProfileName';

export type Props = Omit<
  StackProps,
  keyof Pick<StackProps, 'align' | 'textAlign' | 'children'>
> & {
  imgSrc: string;
  id: string;
  name: string;
  message: string;
};

export const Component: FC<Props> = ({
  imgSrc,
  id,
  name,
  message,
  ...props
}: Props) => (
  <Stack align={'left'} {...props}>
    <Stack flexDir={{ base: 'row', sm: 'column' }} alignItems={'center'}>
      <Avatar src={imgSrc} name={name} size={{ base: 'xl', sm: 'full' }} />
      <ProfileName id={id} name={name} />
    </Stack>
    <Divider />
    <Stack spacing={2}>
      <Heading size={'lg'}>Title</Heading>
      <Text fontSize={'md'}>{message}</Text>
    </Stack>
  </Stack>
);

Component.displayName = 'Profile';
