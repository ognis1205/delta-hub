/**
 * @fileoverview Defines Google Icon atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Icon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';

export type Props = Omit<IconProps, 'as'>;

export const Component: FC<Props> = (props: Props) => (
  <Icon {...props} as={FcGoogle} />
);

Component.displayName = 'GoogleIcon';
