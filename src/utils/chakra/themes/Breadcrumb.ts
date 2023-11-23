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
  transitionProperty: 'common',
  transitionDuration: 'fast',
  transitionTimingFunction: 'ease-out',
  outline: 'none',
  color: 'Russian.700',
  textDecoration: $decor.reference,
  [$decor.variable]: 'none',
  '&[aria-current]': {
    color: 'Russian.900',
    fontWeight: 'bold',
  },
  '&:not([aria-current=page])': {
    cursor: 'pointer',
    _hover: {
      [$decor.variable]: 'none',
      color: 'Russian.900',
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
