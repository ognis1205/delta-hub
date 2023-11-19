/**
 * @fileoverview Defines Nav Link List molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Box, Stack, StackProps } from '@chakra-ui/react';
import { FC, useLayoutEffect, useRef, useState } from 'react';

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
  const [numberOfItemsDisplayed, setNumberOfItemsDisplayed] =
    useState<number>(0);

  const ref = useRef<HTMLElement | null>(null);

  const handleResize = () => {
    const links = ref.current?.children;
    if (links && links.length > 0) {
      const startingOffset = (links[0] as HTMLDivElement).offsetTop;
      let numItems = 0;
      for (let i = 0; i < links.length; i++) {
        if ((links[i] as HTMLDivElement).offsetTop > startingOffset) {
          break;
        }
        numItems++;
      }
      setNumberOfItemsDisplayed(numItems);
      console.log(numItems);
    }
  };

  useLayoutEffect(() => {
    handleResize();
    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Stack {...props} ref={ref}>
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
