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
  <Box
    __css={{
      _hover: {
        background: 'AntiFlashWhite.200',
      },
      _focus: {
        background: 'AntiFlashWhite.200',
      },
      _active: {
        background: 'AntiFlashWhite.300',
      },
      _expanded: {
        background: 'AntiFlashWhite.200',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    }}
    p={2}
    rounded={'md'}
  >
    <Link href={href} variant={'tab'}>
      <HStack {...props}>
        <Icon iconName={iconName} />
        <Text>{name}</Text>
      </HStack>
    </Link>
  </Box>
);

Component.displayName = 'MenuItem';
