/**
 * @fileoverview Defines Link Button atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Button, ButtonProps } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

export type Props = Omit<ButtonProps, keyof Pick<ButtonProps, 'rounded' | 'variant'>> & {
  href: string;
};

export const Component: FC<Props> = ({ children, href, ...props }: Props) => (
  <Button href={href} {...props} rounded={'full'} as={Link} variant={'nav'}>
    {children}
  </Button>
);

Component.displayName = 'LinkButton';
