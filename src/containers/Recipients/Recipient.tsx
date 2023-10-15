/**
 * @fileoverview Defines Recipient.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Tr, Td, Flex, Avatar, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

export type Props = {
  imgSrc: string;
  name: string;
  date: string;
  share: string;
  email: string;
};

const Component: FC<Props> = ({ imgSrc, name, date, share, email }: Props) => (
  <Tr>
    <Td>
      <Flex align={'center'}>
        <Avatar size={'sm'} mr={2} src={imgSrc} />
        <Flex flexDir={'column'}>
          <Heading size={'sm'} letterSpacing={'tight'}>
            {name}
          </Heading>
          <Text fontSize={'sm'} color={'gray'}>
            {date}
          </Text>
        </Flex>
      </Flex>
    </Td>
    <Td>{share}</Td>
    <Td>{email}</Td>
  </Tr>
);

Component.displayName = 'Recipient';

export default Component;
