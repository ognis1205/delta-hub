/**
 * @fileoverview Defines Navigation.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Flex, Heading, Avatar, Text } from '@chakra-ui/react';

import { Logo } from '@/components/Logo';
import { default as Item, Props as ItemProps } from './Item';

export type Props = {
  items: ItemProps[];
};

const Component: FC<Props> = ({ items }: Props) => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <Flex
      w={['100%', '100%', '10%', '15%', '15%']}
      flexDir={'column'}
      alignItems={'center'}
      backgroundColor={'deltaColor2.900'}
      color={'white'}
    >
      <Flex
        flexDir={'column'}
        h={[null, null, '100vh']}
        justifyContent={'space-between'}
      >
        <Flex flexDir={'column'} as={'nav'}>
          <Heading
            mt={25}
            mb={25}
            fontSize={['4xl', '4xl', '2xl', '3xl', '4xl']}
            alignSelf={'center'}
            letterSpacing={'tight'}
          >
            <Logo boxSize={[50, 50, 50, 75, 75]} />
          </Heading>
          <Flex
            flexDir={['row', 'row', 'column', 'column', 'column']}
            align={['center', 'center', 'center', 'flex-start', 'flex-start']}
            wrap={['wrap', 'wrap', 'nowrap', 'nowrap', 'nowrap']}
            justifyContent={'center'}
          >
            {items.map((props: ItemProps, index: number) => (
              <Item key={index} isActive={props.href === pathname} {...props} />
            ))}
          </Flex>
        </Flex>
      </Flex>
      {session && session.user && (
        <Flex flexDir={'column'} alignItems={'center'} mb={10} mt={5}>
          <Avatar my={2} src={session.user.image} />
          <Text textAlign={'center'}>{session.user.name}</Text>
        </Flex>
      )}
    </Flex>
  );
};

Component.displayName = 'Navigation';

export default Component;
