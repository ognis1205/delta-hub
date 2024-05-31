/**
 * @fileoverview Defines Chakra UI Custom Link Style.
 * @copyright Shingo OKAWA 2023
 */
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const variantMain = defineStyle({
  color: 'Russian.700',
  textDecoration: 'none',
  _hover: {
    color: 'Russian.900',
    textDecoration: 'none',
  },
});

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

const variantCatalog = defineStyle({
  color: 'DeltaColor1.500',
  textDecoration: 'none',
  _hover: {
    color: 'DeltaColor1.500',
    textDecoration: 'underline',
  },
});

export const theme = defineStyleConfig({
  defaultProps: {
    variant: 'main',
  },
  variants: {
    main: variantMain,
    menu: variantMenu,
    nav: variantNav,
    tab: variantTab,
    catalog: variantCatalog,
  },
});
