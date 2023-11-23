/**
 * @fileoverview Defines Chakra UI Custom Link Style.
 * @copyright Shingo OKAWA 2023
 */
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const variantMenu = defineStyle({
  color: 'Russian.700',
  textDecoration: 'none',
  _hover: {
    color: 'Russian.900',
    textDecoration: 'none',
  },
});

const variantNav = defineStyle({
  color: 'Russian.700',
  textDecoration: 'none',
  _hover: {
    color: 'Russian.900',
    textDecoration: 'none',
  },
});

const variantTab = defineStyle({
  color: 'Russian.700',
  textDecoration: 'none',
  _hover: {
    color: 'Russian.900',
    textDecoration: 'none',
  },
});

export const theme = defineStyleConfig({
  defaultProps: {
    variant: 'menu',
  },
  variants: { menu: variantMenu, nav: variantNav, tab: variantTab },
});
