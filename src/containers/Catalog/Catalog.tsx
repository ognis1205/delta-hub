/**
 * @fileoverview Defines Catalog.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Flex,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  TableContainer,
} from '@chakra-ui/react';
import { FC } from 'react';

import { default as Share, Props as ShareProps } from './Share';

export type Props = {
  shares: ShareProps[];
};

const Container: FC<Props> = ({ shares }: Props) => {
  return (
    <>
      <Flex justifyContent={'space-between'} mt={8}>
        <Flex align={'flex-end'}>
          <Heading as={'h2'} size={'lg'} letterSpacing={'tight'}>
            Shares
          </Heading>
        </Flex>
      </Flex>
      <Flex flexDir={'column'}>
        <Flex overflow={'auto'}>
          <TableContainer>
            <Table variant={'simple'} mt={4}>
              <Thead>
                <Tr color={'gray'}>
                  <Th>Name</Th>
                  <Th>Tables</Th>
                  <Th>Description</Th>
                  <Th>Profile</Th>
                </Tr>
              </Thead>
              <Tbody>
                {shares.map((props: ShareProps, index: number) => (
                  <Share key={index} {...props} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </>
  );
};

Container.displayName = 'Catalog';

export default Container;
