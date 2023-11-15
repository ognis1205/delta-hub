/**
 * @fileoverview Defines GitHub Icon atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Icon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';

export type Props = Omit<IconProps, 'as'>;

export const Component: FC<Props> = (props: Props) => (
  <Icon {...props} as={FaGithub} />
);

Component.displayName = 'GitHubIcon';
