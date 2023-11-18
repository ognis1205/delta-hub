/**
 * @fileoverview Defines Nav Link List molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Box, Stack, StackProps } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as NavLink, Props as NavLinkProps } from '@/atoms/NavLink';

export type Props = StackProps & {
  path: string;
  activeColor: string;
  items: Omit<NavLinkProps, 'isExternal'>[];
};

export const Component: FC<Props> = ({
  path,
  activeColor,
  items,
  ...props
}: Props) => {
  return (
    <Stack {...props}>
      {items.map(({ href, children, ...props }, i) => {
        return (
          <Box
            key={i}
            borderBottom={href === path ? `solid ${activeColor}` : undefined}
          >
            <NavLink href={href} {...props}>
              {children}
            </NavLink>
          </Box>
        );
      })}
    </Stack>
  );
};

Component.displayName = 'NavLinkList';
