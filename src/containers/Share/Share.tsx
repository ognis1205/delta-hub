/**
 * @fileoverview Defines Share.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Flex,
  Heading,
  AvatarGroup,
  Avatar,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FiPlus, FiShare2, FiMail } from 'react-icons/fi';

export type Props = {
  avatars: string[];
};

const Container: FC<Props> = ({ avatars }: Props) => (
  <>
    <Heading letterSpacing={'tight'} size={'md'} my={4}>
      Share with
    </Heading>
    <Flex>
      <AvatarGroup size={'md'} max={3}>
        {avatars.map((avatar: string, index: number) => (
          <Avatar key={index} src={avatar} />
        ))}
      </AvatarGroup>
      <Avatar icon={<FiPlus />} ml={2} color={'white'} bgColor={'gray.300'} />
    </Flex>
    <Text color={'gray'} mt={10} mb={2}>
      Email
    </Text>
    <InputGroup>
      <InputLeftElement pointerEvents={'none'}>
        <FiMail color={'gray.700'} />
      </InputLeftElement>
      <Input type={'email'} placeholder={'email@address.com'} />
    </InputGroup>
    <Text color={'gray'} mt={4} mb={2}>
      Share
    </Text>
    <InputGroup>
      <InputLeftElement pointerEvents={'none'}>
        <FiShare2 color={'gray.700'} />
      </InputLeftElement>
      <Input type={'text'} placeholder={'share'} />
    </InputGroup>
    <Button mt={4} colorScheme={'deltaColor1'} p={7} borderRadius={15}>
      Share
    </Button>
  </>
);

Container.displayName = 'Share';

export default Container;
