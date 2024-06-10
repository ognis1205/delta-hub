/**
 * @fileoverview Defines Nav Item atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import {
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  IconButton,
  IconButtonProps,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

import { IconName, iconOf } from '@/utils/chakra/icons';

export type Props = Omit<
  IconButtonProps,
  keyof Pick<IconButtonProps, 'icon'>
> & {
  iconName: IconName;
  popover: string;
};

export const Component: FC<Props> = ({
  iconName,
  popover,
  ...props
}: Props) => (
  <Popover trigger={'hover'}>
    <PopoverTrigger>
      <IconButton {...props} icon={iconOf(iconName)} variant={'nav'} />
    </PopoverTrigger>
    <PopoverContent w={'100%'} color={'white'} bg={'Russian.800'}>
      <PopoverArrow bg={'Russian.800'} />
      <PopoverBody p={1}>
        <Text fontSize={'sm'}>{popover}</Text>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

Component.displayName = 'NavItem';
