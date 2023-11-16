/**
 * @fileoverview Defines GitHub Signin molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Button, ButtonProps, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { FC } from 'react';

import { Component as GithubIcon } from '@/atoms/GithubIcon';

export type Props = Omit<
  ButtonProps,
  keyof Pick<ButtonProps, 'children' | 'onClick'>
>;

export const Component: FC<Props> = (props: Props) => {
  const login = () =>
    signIn('github', {
      callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`,
    });

  return (
    <Button onClick={login} {...props}>
      <GithubIcon w={7} h={7} mr={2} />
      <Text fontSize={'sm'}>Continue with GitHub</Text>
    </Button>
  );
};

Component.displayName = 'GithubSignIn';
