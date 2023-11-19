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
  items: Omit<NavLinkProps, 'isExternal'>[];
};

export const Component: FC<Props> = ({ path, items, ...props }: Props) => {
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
        ref={ref}
        pr={1}
        spacing={5}
        direction={'row'}
        alignItems={'center'}
        overflow={'hidden'}
      >
        {items.map(({ href, children, ...props }, i) => {
          return (
            <Flex
              key={i}
              h={10}
              alignItems={'center'}
              visibility={i >= numberOfItemsDisplayed ? 'hidden' : undefined}
              borderBottom={href === path ? 2 : undefined}
              borderStyle={href === path ? 'solid' : undefined}
              borderColor={href === path ? 'DeltaColor1.500' : undefined}
            >
              <NavLink
                href={href}
                {...props}
                color={href === path ? 'SonicSilver.900' : undefined}
              >
                {children}
              </NavLink>
            </Flex>
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
              size={'sm'}
              aria-label={'Navigation Link Menu'}
              icon={<BsThreeDots />}
            />
          </PopoverTrigger>
          <PopoverContent w={'100%'}>
            <PopoverArrow />
            <PopoverBody p={3}>
              {items
                .slice(numberOfItemsDisplayed)
                .map(({ href, children, ...props }, i) => {
                  return (
                    <NavLink key={i} href={href} {...props}>
                      {children}
                    </NavLink>
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
