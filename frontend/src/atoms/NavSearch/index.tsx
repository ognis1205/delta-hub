/**
 * @fileoverview Defines Nav Search atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Button, ButtonProps, Flex, HStack, Box } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Icon } from '@/atoms/Icon';

export type Props = ButtonProps;

export const Component: FC<Props> = (props: Props) => (
  <Button {...props} variant={'nav'} transform={'translate(1px)'}>
    <Flex>
      <HStack>
        <Flex align={'center'}>
          <Icon iconName={'search'} />
          <Box pl={2} pr={20} fontWeight={100}>
            Search catalogs
          </Box>
        </Flex>
      </HStack>
    </Flex>
  </Button>
);

Component.displayName = 'NavSearch';
