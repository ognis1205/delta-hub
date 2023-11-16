/**
 * @fileoverview Defines Google Signin molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Button, ButtonProps, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { FC } from 'react';

import { Component as GoogleIcon } from '@/atoms/GoogleIcon';

export type Props = Omit<
  ButtonProps,
  keyof Pick<ButtonProps, 'children' | 'onClick'>
>;

export const Component: FC<Props> = (props: Props) => {
  const login = () =>
    signIn('google', {
      callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`,
    });

  return (
    <Button onClick={login} {...props}>
      <GoogleIcon w={7} h={7} mr={2} />
      <Text fontSize={'sm'}>Continue with Google</Text>
    </Button>
  );
};

Component.displayName = 'GoogleSignIn';
