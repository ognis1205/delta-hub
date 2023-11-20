/**
 * @fileoverview Defines Chakra UI Custom Link Style.
 * @copyright Shingo OKAWA 2023
 */
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const menu = defineStyle({
  textDecoration: 'none',
  color: 'SonicSilver.700',
  _hover: {
    textDecoration: 'none',
    color: 'SonicSilver.900',
  },
});

const nav = defineStyle({
  textDecoration: 'none',
  color: 'SonicSilver.500',
  _hover: {
    textDecoration: 'none',
    color: 'SonicSilver.700',
  },
});

export const theme = defineStyleConfig({
  defaultProps: {
    variant: 'menu',
  },
  variants: { menu, nav },
});
