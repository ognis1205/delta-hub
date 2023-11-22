/**
 * @fileoverview Defines Menu Drawer molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  useDisclosure,
  Box,
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
import { Component as Logo } from '@/atoms/Logo';
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
              <Box display={'flex'} alignItems={'center'}>
                <Logo size={'sm'} />
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

Component.displayName = 'MenuDrawer';
