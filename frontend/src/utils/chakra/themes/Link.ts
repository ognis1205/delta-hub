/**
 * @fileoverview Defines Chakra UI Custom Link Style.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
