/**
 * @fileoverview Defines Menu Item atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Box, HStack, StackProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { Component as Icon, Props as IconProps } from '@/atoms/Icon';
import { Component as Link } from '@/atoms/Link';

export type Props = StackProps & {
  href: string;
  iconName: IconProps['iconName'];
  name: string;
};

export const Component: FC<Props> = ({
  href,
  iconName,
  name,
  ...props
}: Props) => (
  <Link href={href} variant={'tab'}>
    <Box
      __css={{
        _hover: {
          background: 'gray.50',
        },
        _focus: {
          background: 'gray.50',
        },
        _active: {
          background: 'gray.100',
        },
        _expanded: {
          background: 'gray.50',
        },
        _disabled: {
          opacity: 0.4,
          cursor: 'not-allowed',
        },
      }}
      p={2}
      rounded={'md'}
    >
      <HStack {...props}>
        <Icon iconName={iconName} />
        <Text>{name}</Text>
      </HStack>
    </Box>
  </Link>
);

Component.displayName = 'MenuItem';
