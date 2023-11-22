/**
 * @fileoverview Defines Profile Drawer molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  useDisclosure,
  Box,
  Avatar,
  AvatarProps,
  IconButton,
  Stack,
  HStack,
  VStack,
  Text,
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
              <Box display={'flex'} alignItems={'center'}>
                <Avatar size={'sm'} name={name} src={src} />
                <VStack ml={2} gap={0} alignItems={'start'}>
                  <Text fontSize={'sm'} fontWeight={'bold'}>
                    {id}
                  </Text>
                  <Text fontSize={'sm'} color={'SonicSilver.700'}>
                    {name}
                  </Text>
                </VStack>
              </Box>
              <Spacer />
              <IconButton
                aria-label={'Close drawer'}
                icon={<PiXBold />}
                onClick={onClose}
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
