/**
 * @fileoverview Defines Chakra UI Custom Box Style.
 * @copyright Shingo OKAWA 2023
 */
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const menu = defineStyle({
  _hover: {
    background: 'AntiFlashWhite.200',
  },
  _focus: {
    background: 'AntiFlashWhite.200',
  },
  _active: {
    background: 'AntiFlashWhite.300',
  },
  _expanded: {
    background: 'AntiFlashWhite.200',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
});

const nav = defineStyle({
  _hover: {
    background: 'AntiFlashWhite.600',
  },
  _focus: {
    background: 'AntiFlashWhite.600',
  },
  _active: {
    background: 'AntiFlashWhite.700',
  },
  _expanded: {
    background: 'AntiFlashWhite.600',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
});

export const theme = defineStyleConfig({
  variants: { menu, nav },
});
