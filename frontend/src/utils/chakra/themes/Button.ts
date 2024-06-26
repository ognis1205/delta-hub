/**
 * @fileoverview Defines Chakra UI Custom Button Style.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const variantMain = defineStyle({
  color: 'SonicSilver.600',
  bg: 'gray.50',
  border: '1px',
  borderColor: 'AntiFlashWhite.600',
  boxShadow:
    'rgba(31, 35, 40, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset',
  _hover: {
    color: 'SonicSilver.800',
    bg: 'gray.100',
  },
  _active: {
    color: 'SonicSilver.800',
    bg: 'gray.200',
  },
});

const variantMenu = defineStyle({
  color: 'SonicSilver.700',
  bg: 'transparent',
  _hover: {
    color: 'SonicSilver.900',
    bg: 'gray.50',
  },
  _active: {
    color: 'SonicSilver.900',
    bg: 'gray.100',
  },
});

const variantNav = defineStyle({
  color: 'SonicSilver.600',
  bg: 'gray.50',
  border: '1px',
  borderColor: 'AntiFlashWhite.600',
  boxShadow:
    'rgba(31, 35, 40, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset',
  _hover: {
    color: 'SonicSilver.800',
    bg: 'gray.100',
  },
  _active: {
    color: 'SonicSilver.800',
    bg: 'gray.200',
  },
});

const variantTab = defineStyle({
  color: 'SonicSilver.600',
  bg: 'AntiFlashWhite.500',
  border: '1px',
  borderColor: 'AntiFlashWhite.600',
  boxShadow:
    'rgba(31, 35, 40, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset',
  _hover: {
    color: 'SonicSilver.800',
    bg: 'AntiFlashWhite.600',
  },
  _active: {
    color: 'SonicSilver.800',
    bg: 'AntiFlashWhite.700',
  },
});

const variantCatalog = defineStyle({
  color: 'DeltaColor1.500',
  bg: 'gray.50',
  border: '1px',
  borderColor: 'AntiFlashWhite.600',
  boxShadow:
    'rgba(31, 35, 40, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset',
  _hover: {
    color: 'DeltaColor1.700',
    bg: 'gray.100',
  },
  _active: {
    color: 'DeltaColor1.700',
    bg: 'gray.200',
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
