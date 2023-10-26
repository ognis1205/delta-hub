/**
 * @fileoverview Defines Google Signin molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Button, ButtonProps, Icon, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { GoogleIcon } from '';

export type Props = Omit<ButtonProps, 'children' | 'onClick'>;

export const Component: FC<Props> = (props: Props) => {
  const login = () =>
    signIn('google', {
      callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`,
    });

  return (
    <Button onClick={login} {...props}>
      <Icon as={FcGoogle} w={7} h={7} mr={2} />
      <Text fontSize={'sm'}>Continue with Google</Text>
    </Button>
  );
};

Component.displayName = 'GoogleSignIn';
