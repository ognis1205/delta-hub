/**
 * @fileoverview Defines Catalog Card Body atom.
 * @copyright Shingo OKAWA 2023
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
