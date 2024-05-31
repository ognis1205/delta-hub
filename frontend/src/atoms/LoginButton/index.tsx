/**
 * @fileoverview Defines Social Login molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Button, ButtonProps, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { FC } from 'react';

import { Component as Icon } from '@/atoms/Icon';

export type Provider = 'google' | 'github';

export type Props = Omit<
  ButtonProps,
  keyof Pick<ButtonProps, 'children' | 'onClick'>
> & {
  provider: Provider;
};

const capitalize = (provider: Provider) => {
  switch (provider) {
    case 'google':
      return 'Google';
    case 'github':
      return 'GitHub';
    default:
      return 'N/A';
  }
};

export const Component: FC<Props> = ({ provider, ...props }: Props) => {
  const login = () =>
    signIn(provider as string, {
      callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/home`,
    });

  return (
    <Button onClick={login} {...props} variant={'nav'}>
      <Icon iconName={provider} w={7} h={7} mr={2} />
      <Text fontSize={'sm'}>{`Continue with ${capitalize(provider)}`}</Text>
    </Button>
  );
};

Component.displayName = 'SocialLogin';
