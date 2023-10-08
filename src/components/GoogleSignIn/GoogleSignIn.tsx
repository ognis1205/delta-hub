/**
 * @fileoverview Defines GoogleSignIn.
 * @copyright Shingo OKAWA 2022
 */
'use client';

import { FC } from 'react';
import { Button, ButtonProps, Icon, Text } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';

export type Props = Omit<ButtonProps, 'children' | 'onClick'>;

const Component: FC<Props> = (props: Props) => {
  const login = () => signIn('google', { callbackUrl: process.env.NEXTAUTH_CALLBACK_URL as string });

  return (
    <Button
      onClick={login}
      {...props}
    >
      <Icon as={FcGoogle} w={7} h={7} mr={2} />
      <Text ontSize={'sm'}>
        Continue with Google
      </Text>
    </Button>
  );
};

Component.displayName = 'GoogleSignIn';

export default Component;
