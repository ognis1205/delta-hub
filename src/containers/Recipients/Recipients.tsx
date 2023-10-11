/**
 * @fileoverview Defines Recipients.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { FC, useState } from 'react';
import {
  Flex,
  Heading,
  Text,
  Divider,
  IconButton,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from '@chakra-ui/react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { default as Recipient, Props as RecipientProps } from './Recipient';

export type Props = {
  monthYear: string;
  recipients: RecipientProps[];
};

const Container: FC<Props> = ({ monthYear, recipients }: Props) => {
  const [display, changeDisplay] = useState('hide');

  return (
    <>
      <Flex justifyContent={'space-between'} mt={8}>
        <Flex align={'flex-end'}>
          <Heading as={'h2'} size={'lg'} letterSpacing={'tight'}>
            Recipients
          </Heading>
          <Text fontSize={'small'} color={'gray'} ml={4}>
            {monthYear}
          </Text>
        </Flex>
      </Flex>
      <Flex flexDir={'column'}>
        <Flex overflow={'auto'}>
          <Table variant={'unstyled'} mt={4}>
            <Thead>
              <Tr color={'gray'}>
                <Th>Name</Th>
                <Th>Share</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {recipients.map((props: RecipientProps, index: number) => (
                <Recipient key={index} {...props} />
              ))}
              {display == 'show' &&
                recipients.map((props: RecipientProps, index: number) => (
                  <Recipient key={index} {...props} />
                ))}
            </Tbody>
          </Table>
        </Flex>
        <Flex align={'center'}>
          <Divider />
          <IconButton
            icon={display == 'show' ? <FiChevronUp /> : <FiChevronDown />}
            aria-label={'Show more recipients'}
            onClick={() => {
              if (display == 'show') {
                changeDisplay('none');
              } else {
                changeDisplay('show');
              }
            }}
          />
          <Divider />
        </Flex>
      </Flex>
    </>
  );
};

Container.displayName = 'Recipients';

export default Container;
