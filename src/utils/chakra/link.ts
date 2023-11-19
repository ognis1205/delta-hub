/**
 * @fileoverview Defines Chakra UI Custom Link Style.
 * @copyright Shingo OKAWA 2023
 */
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const router = defineStyle({
  textDecoration: 'none',
  color: 'AntiFlashWhite.900',
  _hover: {
    textDecoration: 'none',
    color: 'SonicSilver.900',
  },
});

export const theme = defineStyleConfig({
  variants: { router },
});
