/**
 * @fileoverview Defines Nav Item atom.
 * @copyright Shingo OKAWA 2023
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
      <IconButton {...props} icon={iconOf(iconName)} />
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
