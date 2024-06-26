/**
 * @fileoverview Defines Menu Drawer molecule.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import {
  useDisclosure,
  IconButton,
  IconButtonProps,
  HStack,
  Spacer,
  Drawer,
  DrawerProps,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Stack,
  Divider,
} from '@chakra-ui/react';
import { FC } from 'react';
import { PiXBold, PiListBold } from 'react-icons/pi';

import { Component as Copyright } from '@/atoms/Copyright';
import { Component as MenuHeader } from '@/atoms/MenuHeader';
import {
  Component as MenuItem,
  Props as MenuItemProps,
} from '@/atoms/MenuItem';

export type Item = 'divider' | MenuItemProps;

export type Props = Omit<
  IconButtonProps,
  keyof Pick<IconButtonProps, 'icon' | 'onClick'>
> & {
  placement: DrawerProps['placement'];
  items: Item[];
};

const isMenuItem = (item: Item): item is MenuItemProps => {
  return item !== 'divider';
};

export const Component: FC<Props> = ({ placement, items, ...props }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        {...props}
        icon={<PiListBold />}
        onClick={onOpen}
        variant={'nav'}
      />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <HStack>
              <MenuHeader
                flexDir={'row'}
                alignItems={'center'}
                logoSize={'sm'}
                titleSize={'sm'}
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

Component.displayName = 'MenuDrawer';
