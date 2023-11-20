/**
 * @fileoverview Defines Chakra UI Custom Button Style.
 * @copyright Shingo OKAWA 2023
 */
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const menu = defineStyle({
  background: 'white',
  color: 'SonicSilver.700',
  _hover: {
    background: 'AntiFlashWhite.200',
    color: 'SonicSilver.900',
  },
});

const nav = defineStyle({
  background: 'AntiFlashWhite.500',
  color: 'SonicSilver.500',
  border: '1px AntiFlashWhite.600',
  boxShadow:
    'rgba(31, 35, 40, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset',
  _hover: {
    background: 'AntiFlashWhite.600',
    color: 'SonicSilver.700',
  },
});

export const theme = defineStyleConfig({
  defaultProps: {
    variant: 'menu',
  },
  variants: { menu, nav },
});
