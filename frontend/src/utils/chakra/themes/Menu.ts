/**
 * @fileoverview Defines Chakra UI Custom Menu Style.
 * @copyright Shingo OKAWA 2023
 */
import { menuAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const $bg = cssVar('menu-bg');

const baseStyleItem = defineStyle({
  color: 'Russian.700',
  _focus: {
    [$bg.variable]: 'gray.50',
    color: 'Russian.900',
  },
  _active: {
    [$bg.variable]: 'gray.100',
    color: 'Russian.900',
  },
  _expanded: {
    [$bg.variable]: 'gray.50',
    color: 'Russian.900',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  bg: $bg.reference,
});

const baseStyle = definePartsStyle({
  item: baseStyleItem,
});

export const theme = defineMultiStyleConfig({
  baseStyle,
});
