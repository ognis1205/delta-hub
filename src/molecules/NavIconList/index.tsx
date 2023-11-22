/**
 * @fileoverview Defines Nav Icon List molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Stack, StackProps } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as NavItem, Props as NavItemProps } from '@/atoms/NavItem';
import { Component as NavLink } from '@/atoms/NavLink';

type ItemProps = NavItemProps & {
  href: string;
};

export type Props = StackProps & {
  items: ItemProps[];
};

export const Component: FC<Props> = ({ items, ...props }: Props) => (
  <Stack {...props}>
    {items.map(({ href, ...props }, i) => {
      return (
        <NavLink key={i} href={href}>
          <NavItem {...props} />
        </NavLink>
      );
    })}
  </Stack>
);

Component.displayName = 'NavIconList';
