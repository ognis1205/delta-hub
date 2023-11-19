/**
 * @fileoverview Defines Nav Link List molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Box,
  Flex,
  Stack,
  StackProps,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  IconButton,
} from '@chakra-ui/react';
import { FC, useLayoutEffect, useRef, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';

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

  const ref = useRef<HTMLDivElement | null>(null);

  const handleResize = () => {
    const container = ref.current;
    const links = ref.current?.children;
    if (container && links && links.length > 0) {
      const threshold =
        (container as HTMLDivElement).offsetLeft +
        (container as HTMLDivElement).offsetWidth;
      let numItems = 0;
      for (let i = 0; i < links.length; i++) {
        const x =
          (links[i] as HTMLDivElement).offsetLeft +
          (links[i] as HTMLDivElement).offsetWidth;
        if (x > threshold) {
          break;
        }
        numItems++;
      }
      setNumberOfItemsDisplayed(numItems);
    }
  };

  useLayoutEffect(() => {
    handleResize();
    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Stack {...props}>
      <Stack
        px={1}
        ref={ref}
        direction={'row'}
        alignItems={'center'}
        overflow={'hidden'}
      >
        {items.map(({ href, children, ...props }, i) => {
          return (
            <Box
              key={i}
              visibility={i >= numberOfItemsDisplayed ? 'hidden' : undefined}
              borderBottom={href === path ? `solid ${activeColor}` : undefined}
            >
              <NavLink href={href} {...props}>
                {children}
              </NavLink>
            </Box>
          );
        })}
      </Stack>
      <Box
        visibility={
          items.length === numberOfItemsDisplayed ? 'hidden' : undefined
        }
      >
        <Popover>
          <PopoverTrigger>
            <IconButton
              aria-label={'Navigation Link Menu'}
              icon={<BsThreeDots />}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              {items
                .slice(numberOfItemsDisplayed)
                .map(({ href, children, ...props }, i) => {
                  return (
                    <Box key={i}>
                      <NavLink href={href} {...props}>
                        {children}
                      </NavLink>
                    </Box>
                  );
                })}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Stack>
  );
};

Component.displayName = 'NavLinkList';
