/**
 * @fileoverview Defines Chakra UI Custom Link Style.
 * @copyright Shingo OKAWA 2023
 */
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const variantMenu = defineStyle({
  color: 'SonicSilver.700',
  textDecoration: 'none',
  _hover: {
    color: 'SonicSilver.900',
    textDecoration: 'none',
  },
});

const variantNav = defineStyle({
  color: 'SonicSilver.500',
  textDecoration: 'none',
  _hover: {
    color: 'SonicSilver.700',
    textDecoration: 'none',
  },
});

export const theme = defineStyleConfig({
  defaultProps: {
    variant: 'menu',
  },
  variants: { menu: variantMenu, nav: variantNav },
});
