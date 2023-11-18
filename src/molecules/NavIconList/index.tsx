/**
 * @fileoverview Defines Nav Icon List molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Stack, StackProps } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as NavIcon, Props as NavIconProps } from '@/atoms/NavIcon';
import { Component as NavLink } from '@/atoms/NavLink';

type ItemProps = NavIconProps & {
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
          <NavIcon {...props} />
        </NavLink>
      );
    })}
  </Stack>
);

Component.displayName = 'NavIconList';
