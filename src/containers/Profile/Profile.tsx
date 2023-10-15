/**
 * @fileoverview Defines Profile.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Heading,
  HStack,
  Flex,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

export type Props = {
  image: string;
  name: string;
  email: string;
  shares: number;
  recipients: number;
};

const Container: FC<Props> = ({
  image,
  name,
  email,
  shares,
  recipients,
}: Props) => (
  <>
    <Heading as={'h2'} size={'lg'} mb={4} letterSpacing={'tight'}>
      Your Profile
    </Heading>
    <Card
      w={'auto'}
      display={'flex'}
      direction={'column'}
      align={'center'}
      justify={'center'}
      padding={'2'}
    >
      <CardHeader
        display={'flex'}
        flexDirection={'column'}
        gap={'1'}
        alignItems={'center'}
      >
        <Avatar src={image} />
        <Heading size={'md'}>{name}</Heading>
        <Text>{email}</Text>
      </CardHeader>
      <CardBody display={'flex'} flexDirection={'column'} gap={'2'}>
        <HStack w={'100%'} justify={'space-evenly'}>
          <Flex
            fontSize={'sm'}
            justify={'center'}
            align={'center'}
            direction={'column'}
          >
            <Text casing={'capitalize'} fontWeight={'bold'}>
              Shares
            </Text>
            <Text>{shares}&nbsp;[#]</Text>
          </Flex>
          <Flex
            fontSize={'sm'}
            justify={'center'}
            align={'center'}
            direction={'column'}
          >
            <Text casing={'capitalize'} fontWeight={'bold'}>
              Recipients
            </Text>
            <Text>{recipients}&nbsp;[#]</Text>
          </Flex>
        </HStack>
      </CardBody>
    </Card>
  </>
);

Container.displayName = 'Profile';

export default Container;
