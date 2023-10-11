/**
 * @fileoverview Defines Share.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { FC } from 'react';
import { FiDownload } from 'react-icons/fi';
import {
  Tr,
  Td,
  Flex,
  Avatar,
  Heading,
  Text,
  IconButton,
} from '@chakra-ui/react';
import axios from 'axios';
import fileDownload from 'js-file-download';

export type Props = {
  imgSrc: string;
  name: string;
  date: string;
  numberOfTables: number;
  description: string;
};

const Component: FC<Props> = ({
  imgSrc,
  name,
  date,
  numberOfTables,
  description,
}: Props) => {
  const handleClick = (url: string, filename: string) => {
    axios
      .get(url, {
        responseType: 'blob',
      })
      .then((response) => {
        fileDownload(response.data, filename);
      });
  };

  return (
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
      <Td>{numberOfTables}</Td>
      <Td>{description}</Td>
      <Td>
        <IconButton
          aria-label={'Share'}
          icon={<FiDownload />}
          fontSize={'sm'}
          colorScheme={'deltaColor1'}
          borderRadius={'10%'}
          p={'10px'}
          onClick={() => {
            handleClick('http://localhost:8080/admin/issue', 'profile.json');
          }}
        />
      </Td>
    </Tr>
  );
};

Component.displayName = 'Share';

export default Component;
