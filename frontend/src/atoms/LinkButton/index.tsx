/**
 * @fileoverview Defines Link Button atom.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Button, ButtonProps } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

export type Props = Omit<
  ButtonProps,
  keyof Pick<ButtonProps, 'rounded' | 'variant'>
> & {
  href: string;
};

export const Component: FC<Props> = ({ children, href, ...props }: Props) => (
  <Button href={href} {...props} rounded={'full'} as={Link} variant={'nav'}>
    {children}
  </Button>
);

Component.displayName = 'LinkButton';
