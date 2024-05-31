/**
 * @fileoverview Defines Catalog Card molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Card,
  CardProps,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { FC } from 'react';

import { Component as CatalogCardBody } from '@/atoms/CatalogCardBody';
import {
  Component as CatalogCardFooter,
  Props as CatalogCardFooterProps,
} from '@/atoms/CatalogCardFooter';
import {
  Component as CatalogCardHeader,
  Props as CatalogCardHeaderProps,
} from '@/atoms/CatalogCardHeader';

export type Props = CardProps & {
  name: CatalogCardHeaderProps['name'];
  href: CatalogCardHeaderProps['href'];
  description: string;
  stars: CatalogCardFooterProps['stars'];
  shares: CatalogCardFooterProps['shares'];
};

export const Component: FC<Props> = ({
  name,
  href,
  description,
  stars,
  shares,
  ...props
}: Props) => (
  <Card
    {...props}
    p={2}
    border={'1px'}
    borderColor={'AntiFlashWhite.600'}
    boxShadow={
      'rgba(31, 35, 40, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset'
    }
  >
    <CardHeader p={0}>
      <CatalogCardHeader name={name} href={href} />
    </CardHeader>
    <CardBody mt={1} p={0} fontSize={'sm'}>
      <CatalogCardBody>{description}</CatalogCardBody>
    </CardBody>
    <CardFooter mt={1} p={0} fontSize={'sm'}>
      <CatalogCardFooter stars={stars} shares={shares} />
    </CardFooter>
  </Card>
);

Component.displayName = 'CatalogCard';
