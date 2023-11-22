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
import { PiDotsThreeBold } from 'react-icons/pi';

import { Component as TabItem, Props as TabItemProps } from '@/atoms/TabItem';

export type Props = Omit<
  StackProps,
  keyof Pick<StackProps, 'direction' | 'alignItems' | 'overflow'>
> & {
  path: string;
  items: TabItemProps[];
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
    <Stack
      {...props}
      direction={'row'}
      alignItems={'center'}
      overflow={'hidden'}
    >
      <Stack
        ref={ref}
        pr={1}
        spacing={5}
        direction={'row'}
        alignItems={'center'}
        overflow={'hidden'}
      >
        {items.map(({ href, ...props }, i) => {
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
              <TabItem
                href={href}
                {...props}
                color={href === path ? 'SonicSilver.900' : undefined}
              />
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
              icon={<PiDotsThreeBold />}
            />
          </PopoverTrigger>
          <PopoverContent w={'100%'}>
            <PopoverArrow />
            <PopoverBody p={3}>
              {items.slice(numberOfItemsDisplayed).map((props, i) => {
                return <TabItem key={i} {...props} />;
              })}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Stack>
  );
};

Component.displayName = 'NavLinkList';
