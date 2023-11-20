/**
 * @fileoverview Defines Nav Drawer molecule.
 * @copyright Shingo OKAWA 2023
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
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { MdClose } from 'react-icons/md';

export type Props = Omit<
  IconButtonProps,
  keyof Pick<IconButtonProps, 'onClick'>
> & {
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
      <IconButton {...props} onClick={onOpen} />
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

Component.displayName = 'NavDrawer';
