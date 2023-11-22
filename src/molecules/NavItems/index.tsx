/**
 * @fileoverview Defines Nav Items molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Stack, StackProps } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Link } from '@/atoms/Link';
import { Component as NavItem, Props as NavItemProps } from '@/atoms/NavItem';

type ItemProps = NavItemProps & {
  href: string;
};

export type Props = Omit<
  StackProps,
  keyof Pick<StackProps, 'direction' | 'alignItems' | 'flexGrow'>
> & {
  items: ItemProps[];
};

export const Component: FC<Props> = ({ items, ...props }: Props) => (
  <Stack {...props} direction={'row'} alignItems={'center'} flexGrow={1}>
    {items.map(({ href, ...props }, i) => {
      return (
        <Link key={i} href={href}>
          <NavItem {...props} />
        </Link>
      );
    })}
  </Stack>
);

Component.displayName = 'NavItems';
