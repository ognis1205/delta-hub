/**
 * @fileoverview Defines Breadcrumbs molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Breadcrumb,
  BreadcrumbProps,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { FC } from 'react';

export type Props = BreadcrumbProps & {
  path: string;
};

export const Component: FC<Props> = ({ path, ...props }: Props) => {
  const paths = path.split('/').filter((p) => !/^\s*$/.test(p));
  return (
    <Breadcrumb {...props}>
      {paths.map((path, i) => {
        return (
          <BreadcrumbItem key={i} isCurrentPage={i === paths.length - 1}>
            <BreadcrumbLink href={`/${paths.slice(0, i + 1).join('/')}`}>
              {path}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

Component.displayName = 'Breadcrumbs';
