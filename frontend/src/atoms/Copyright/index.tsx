/**
 * @fileoverview Defines Copyright atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
