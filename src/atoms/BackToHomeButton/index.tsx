/**
 * @fileoverview Defines Back to Home Button atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Button, ButtonProps } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

export type Props = Omit<ButtonProps, keyof Pick<ButtonProps, 'rounded'>>;

export const Component: FC<Props> = (props: Props) => (
  <Button {...props} href={'/'} rounded={'full'} as={Link}>
    Back to home
  </Button>
);

Component.displayName = 'BackToHomeButton';
