/**
 * @fileoverview Defines Chakra UI Custom Button Style.
 * @copyright Shingo OKAWA 2023
 */
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const navIcon = defineStyle({
  background: 'AntiFlashWhite.500',
  color: 'AntiFlashWhite.900',
  border: '1px AntiFlashWhite.600',
  boxShadow:
    'rgba(31, 35, 40, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset',
  _hover: {
    background: 'AntiFlashWhite.600',
    color: 'AntiFlashWhite.900',
  },
});

const navLink = defineStyle({
  background: 'AntiFlashWhite.500',
  color: 'SonicSilver.900',
  border: '1px AntiFlashWhite.600',
  boxShadow:
    'rgba(31, 35, 40, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset',
  _hover: {
    background: 'AntiFlashWhite.600',
    color: 'SonicSilver.900',
  },
});

export const theme = defineStyleConfig({
  defaultProps: {
    variant: 'navLink',
  },
  variants: { navIcon, navLink },
});
