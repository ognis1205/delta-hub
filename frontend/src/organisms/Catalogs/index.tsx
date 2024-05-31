/**
 * @fileoverview Defines Catalogs molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
import { FC } from 'react';

import {
  Component as CatalogCard,
  Props as CatalogCardProps,
} from '@/molecules/CatalogCard';

export type Props = SimpleGridProps & {
  items: CatalogCardProps[];
};

export const Component: FC<Props> = ({ items, ...props }: Props) => (
  <SimpleGrid {...props}>
    {items.map((item, i) => {
      return <CatalogCard key={i} {...item} />;
    })}
  </SimpleGrid>
);

Component.displayName = 'Catalogs';
