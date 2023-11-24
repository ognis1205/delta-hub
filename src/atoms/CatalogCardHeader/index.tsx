/**
 * @fileoverview Defines Catalog Card Header atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { HStack, StackProps, Text, Spacer } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Icon } from '@/atoms/Icon';
import { Component as Link } from '@/atoms/Link';

export type Props = StackProps & {
  name: string;
  href: string;
};

export const Component: FC<Props> = ({ name, href, ...props }: Props) => (
  <HStack {...props}>
    <Icon iconName={'catalog'} />
    <Link href={href} variant={'catalog'}>
      <Text>{name}</Text>
    </Link>
    <Spacer />
    <Icon iconName={'grab'} />
  </HStack>
);

Component.displayName = 'CatalogCardHeader';
