/**
 * @fileoverview Defines Icon atom.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { forwardRef, Icon, IconProps } from '@chakra-ui/react';

import { IconName, iconAs } from '@/utils/chakra/icons';

export type Props = IconProps & {
  iconName: IconName;
};

export const Component = forwardRef<Props, typeof Icon>(
  ({ iconName, ...props }, ref) => (
    <Icon ref={ref} {...props} as={iconAs(iconName)} />
  ),
);

Component.displayName = 'GitHubIcon';
