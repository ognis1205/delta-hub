/**
 * @fileoverview Defines Nav Drawer molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  useDisclosure,
  IconButton,
  Drawer,
  DrawerProps,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { FC, ReactNode, ReactElement } from 'react';

export type Props = DrawerProps & {
  icon: ReactElement;
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
  ariaLabel: string;
};

export const Component: FC<Props> = ({
  icon,
  header,
  body,
  footer,
  ariaLabel,
  ...props
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton aria-label={ariaLabel} icon={icon} onClick={onOpen} />
      <Drawer {...props} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{header}</DrawerHeader>
          <DrawerBody>{body}</DrawerBody>
        </DrawerContent>
        <DrawerFooter>{footer}</DrawerFooter>
      </Drawer>
    </>
  );
};

Component.displayName = 'NavDrawer';
