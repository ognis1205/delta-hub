/**
 * @fileoverview Defines Profile Drawer molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  useDisclosure,
  Avatar,
  AvatarProps,
  IconButton,
  HStack,
  Spacer,
  Drawer,
  DrawerProps,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { MdClose } from 'react-icons/md';

export type Props = Omit<AvatarProps, keyof Pick<AvatarProps, 'onClick'>> & {
  'aria-label': string;
  placement: DrawerProps['placement'];
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
};

export const Component: FC<Props> = ({
  placement,
  header,
  body,
  footer,
  ...props
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Avatar {...props} onClick={onOpen} cursor={'pointer'} />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <HStack>
              {header}
              <Spacer />
              <IconButton
                aria-label={'Close drawer'}
                icon={<MdClose />}
                onClick={onClose}
              />
            </HStack>
          </DrawerHeader>
          <DrawerBody>{body}</DrawerBody>
          <DrawerFooter justifyContent={'center'}>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

Component.displayName = 'ProfileDrawer';
