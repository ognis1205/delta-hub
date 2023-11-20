/**
 * @fileoverview Defines Copyright molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Text, TextProps } from '@chakra-ui/react';
import { FC } from 'react';

export type Props = TextProps;

export const Component: FC<Props> = (props: Props) => (
  <Text {...props}>
    &copy; {new Date().getFullYear()} Shingo OKAWA. All Rights Reserved.
  </Text>
);

Component.displayName = 'Copyright';
