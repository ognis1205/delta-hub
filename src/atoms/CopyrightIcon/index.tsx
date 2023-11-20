/**
 * @fileoverview Defines Copyright Icon atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Icon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';
import { FaCopyright } from 'react-icons/fa';

export type Props = IconProps;

export const Component: FC<Props> = (props: Props) => (
  <Icon {...props} as={FaCopyright} />
);

Component.displayName = 'CopyrightIcon';
