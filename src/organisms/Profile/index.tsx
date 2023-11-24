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
  Button,
} from '@chakra-ui/react';
import { FC } from 'react';

import { Component as ProfileConnections } from '@/atoms/ProfileConnections';
import { Component as ProfileHeader } from '@/atoms/ProfileHeader';
import { Component as ProfileItem } from '@/atoms/ProfileItem';

export type Props = Omit<
  StackProps,
  keyof Pick<StackProps, 'align' | 'textAlign' | 'children'>
> & {
  imgSrc: string;
  id: string;
  name: string;
  message: string;
  following: number;
  followers: number;
  address: string;
  email: string;
  link: string;
};

export const Component: FC<Props> = ({
  imgSrc,
  id,
  name,
  message,
  following,
  followers,
  address,
  email,
  link,
  ...props
}: Props) => (
  <Stack align={'left'} {...props}>
    <ProfileHeader
      id={id}
      name={name}
      avatarSrc={imgSrc}
      flexDir={{ base: 'row', sm: 'column' }}
      alignItems={'center'}
      avatarSize={{ base: 'xl', sm: 'full' }}
      fontSize={'xl'}
    />
    <Divider />
    <Stack spacing={2}>
      <Button variant={'nav'} w={'100%'}>
        <Text fontWeight={'bold'}>Edit profile</Text>
      </Button>
      <ProfileConnections followers={followers} following={following} />
      <ProfileItem iconName={'map'} value={address} />
      <ProfileItem iconName={'email'} value={email} />
      <ProfileItem iconName={'link'} value={link} />
    </Stack>
  </Stack>
);

Component.displayName = 'Profile';
