/**
 * @fileoverview Defines Profile Drawer molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import {
  useDisclosure,
  Avatar,
  AvatarProps,
  IconButton,
  Stack,
  HStack,
  Spacer,
  Drawer,
  DrawerProps,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Divider,
} from '@chakra-ui/react';
import { FC } from 'react';
import { PiXBold } from 'react-icons/pi';

import { Component as Copyright } from '@/atoms/Copyright';
import {
  Component as MenuItem,
  Props as MenuItemProps,
} from '@/atoms/MenuItem';
import { Component as ProfileHeader } from '@/atoms/ProfileHeader';

export type Item = 'divider' | MenuItemProps;

export type Props = Omit<AvatarProps, keyof Pick<AvatarProps, 'onClick'>> & {
  id: string;
  name: string;
  'aria-label': string;
  placement: DrawerProps['placement'];
  items: Item[];
};

const isMenuItem = (item: Item): item is MenuItemProps => {
  return item !== 'divider';
};

export const Component: FC<Props> = ({
  id,
  name,
  src,
  placement,
  items,
  ...props
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Avatar
        {...props}
        name={name}
        src={src}
        onClick={onOpen}
        cursor={'pointer'}
      />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <HStack>
              <ProfileHeader
                id={id}
                name={name}
                flexDir={'row'}
                alignItems={'center'}
                avatarSrc={src}
                avatarSize={'sm'}
                fontSize={'sm'}
                textAlignItmes={'start'}
                textGap={0}
              />
              <Spacer />
              <IconButton
                aria-label={'Close drawer'}
                icon={<PiXBold />}
                onClick={onClose}
                variant={'menu'}
              />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              {items.map((props, i) => {
                if (isMenuItem(props)) {
                  return <MenuItem key={i} {...props} />;
                }
                return <Divider key={i} />;
              })}
            </Stack>
          </DrawerBody>
          <DrawerFooter justifyContent={'center'}>
            <Copyright fontSize={'xs'} color={'SonicSilver.500'} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

Component.displayName = 'ProfileDrawer';
