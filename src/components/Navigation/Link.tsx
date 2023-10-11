/**
 * @fileoverview Defines Link.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { FC } from 'react';
import NextLink from 'next/link';
import {
  FiHome,
  FiShare2,
  FiDownload,
  FiFilePlus,
  FiSettings,
} from 'react-icons/fi';
import { Flex, Link as ChakraLink, Icon, Text } from '@chakra-ui/react';

const icons = {
  home: FiHome,
  catalog: FiDownload,
  share: FiShare2,
  table: FiFilePlus,
  settings: FiSettings,
};

export type Props = {
  title: string;
  icon: keyof typeof icons;
  href: string;
  isActive?: boolean;
};

const Component: FC<Props> = ({ title, icon, href, isActive }: Props) => (
  <Flex mr={[2, 6, 0, 0, 0]} mb={[0, 0, '1.5em', '1.5em', '1.5em']}>
    <ChakraLink
      as={NextLink}
      href={href}
      display={['none', 'none', 'flex', 'flex', 'flex']}
      color={isActive ? 'deltaColor1.100' : 'white'}
      fontWeight={isActive ? 'bold' : 'normal'}
    >
      <Icon as={icons[icon]} fontSize={'2xl'} className={'active-icon'} />
    </ChakraLink>
    <ChakraLink
      as={NextLink}
      href={href}
      _hover={{ textDecor: 'none' }}
      display={['flex', 'flex', 'none', 'flex', 'flex']}
      color={isActive ? 'deltaColor1.100' : 'white'}
      fontWeight={isActive ? 'bold' : 'normal'}
    >
      <Text ml={'1em'}>{title}</Text>
    </ChakraLink>
  </Flex>
);

Component.displayName = 'NavigationLink';

export default Component;
