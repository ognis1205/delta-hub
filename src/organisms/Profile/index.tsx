/**
 * @fileoverview Defines Back to Profile organism.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Stack,
  StackProps,
  Text,
  Divider,
  Button,
  Heading,
  Flex,
  AvatarGroup,
  Avatar,
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
      flexDir={{ base: 'row', md: 'column' }}
      alignItems={'center'}
      avatarSize={'xl'}
      fontSize={'xl'}
      textAlignItmes={'start'}
      textGap={0}
    />
    <Divider />
    <Stack spacing={2}>
      <Button variant={'nav'} my={2} w={'100%'} size={'sm'}>
        <Text fontWeight={'bold'}>Edit profile</Text>
      </Button>
      <ProfileConnections followers={followers} following={following} />
      <ProfileItem iconName={'map'} value={address} />
      <ProfileItem iconName={'email'} value={email} />
      <ProfileItem iconName={'link'} value={link} />
    </Stack>
    <Divider />
    <Heading my={2} size="sm">
      Collaborators
    </Heading>
    <Flex>
      <AvatarGroup size={'md'} max={3}>
        {[1, 2, 3, 4].map((id, i) => (
          <Avatar key={i} src={`/images/cat${id}.jpg`} />
        ))}
      </AvatarGroup>
    </Flex>
    <Divider />
  </Stack>
);

Component.displayName = 'Profile';
