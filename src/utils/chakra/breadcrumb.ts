/**
 * @fileoverview Defines Chakra UI Custom Breadcrumb Style.
 * @copyright Shingo OKAWA 2023
 */
import { breadcrumbAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/react';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const $decor = cssVar('breadcrumb-link-decor');

const linkStyle = defineStyle({
  [$decor.variable]: 'none',
  color: 'SonicSilver.700',
  '&[aria-current]': {
    color: 'SonicSilver.900',
    fontWeight: 'bold',
  },
  '&:not([aria-current=page])': {
    cursor: 'pointer',
    _hover: {
      [$decor.variable]: 'none',
      color: 'SonicSilver.900',
    },
    _focusVisible: {
      boxShadow: 'outline',
    },
  },
});

const baseStyle = definePartsStyle({
  link: linkStyle,
});

export const theme = defineMultiStyleConfig({
  baseStyle,
});
