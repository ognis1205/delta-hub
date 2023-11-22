/**
 * @fileoverview Defines Chakra UI Custom Button Style.
 * @copyright Shingo OKAWA 2023
 */
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const variantMenu = defineStyle({
  color: 'SonicSilver.700',
  bg: 'transparent',
  _hover: {
    color: 'SonicSilver.900',
    bg: 'AntiFlashWhite.200',
  },
  _active: {
    color: 'SonicSilver.900',
    bg: 'AntiFlashWhite.300',
  },
});

const variantNav = defineStyle({
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

export const theme = defineStyleConfig({
  defaultProps: {
    variant: 'menu',
  },
  variants: { menu: variantMenu, nav: variantNav, tab: variantTab },
});
