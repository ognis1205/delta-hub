/**
 * @fileoverview Defines Timeline Header atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
  year: string;
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
