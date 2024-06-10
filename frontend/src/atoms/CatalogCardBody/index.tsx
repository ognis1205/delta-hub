/**
 * @fileoverview Defines Catalog Card Body atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Text, TextProps } from '@chakra-ui/react';
import { FC } from 'react';

export type Props = Omit<TextProps, keyof Pick<TextProps, 'color'>>;

export const Component: FC<Props> = ({ children, ...props }: Props) => (
  <Text {...props} color={'Russian.700'}>
    {children}
  </Text>
);

Component.displayName = 'CatalogCardBody';
