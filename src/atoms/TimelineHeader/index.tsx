/**
 * @fileoverview Defines Timeline Header atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Box,
  BoxProps,
  Divider,
  AbsoluteCenter,
  Text,
  HStack,
} from '@chakra-ui/react';
import { FC } from 'react';

export type Props = BoxProps & {
  month: string;
  yeat: string;
};

export const Component: FC<Props> = ({ month, year, ...props }: Props) => (
  <Box {...props} position={'relative'}>
    <Divider />
    <AbsoluteCenter bg={'white'} px={1} axis={'vertical'}>
      <HStack>
        <Text fontSize={'xs'} fontWeight={'bold'}>
          {month}
        </Text>
        <Text fontSize={'xs'} fontWeight={'bold'} color={'gray'}>
          {year}
        </Text>
      </HStack>
    </AbsoluteCenter>
  </Box>
);

Component.displayName = 'TimelineHeader';
