/**
 * @fileoverview Defines Profile Header atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import {
  Stack,
  StackProps,
  VStack,
  Avatar,
  AvatarProps,
  Text,
  TextProps,
} from '@chakra-ui/react';
import { FC } from 'react';

export type Props = StackProps & {
  id: string;
  name: string;
  avatarSrc: AvatarProps['src'];
  avatarSize: AvatarProps['size'];
  fontSize: TextProps['fontSize'];
  textAlignItmes: StackProps['alignItems'];
  textGap: StackProps['gap'];
};

export const Component: FC<Props> = ({
  id,
  name,
  avatarSrc,
  avatarSize,
  fontSize,
  textAlignItmes,
  textGap,
  ...props
}: Props) => (
  <Stack {...props}>
    <Avatar src={avatarSrc} name={name} size={avatarSize} />
    <VStack alignItems={textAlignItmes} gap={textGap}>
      <Text fontSize={fontSize} fontWeight={'bold'}>
        {id}
      </Text>
      <Text fontSize={fontSize} color={'SonicSilver.700'}>
        {name}
      </Text>
    </VStack>
  </Stack>
);

Component.displayName = 'ProfileHeader';
