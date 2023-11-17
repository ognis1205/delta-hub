/**
 * @fileoverview Defines NavIcon atom.
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

export type Props = IconButtonProps & {
  popover: string;
};

export const Component: FC<Props> = ({ popover, ...props }: Props) => (
  <Popover trigger={'hover'}>
    <PopoverTrigger>
      <IconButton {...props} />
    </PopoverTrigger>
    <PopoverContent w={'100%'} color={'white'} bg={'Russian.800'}>
      <PopoverArrow bg={'Russian.800'} />
      <PopoverBody p={1}>
        <Text fontSize={'sm'}>{popover}</Text>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

Component.displayName = 'NavIcon';
