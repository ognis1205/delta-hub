/**
 * @fileoverview Defines Right Pane organism.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
 */
'use client';

import { Box, BoxProps } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FC, ReactNode } from 'react';

export type Props = BoxProps & {
  children: ReactNode;
};

export const Component: FC<Props> = ({ children, ...props }: Props) => (
  <Box {...props}>
    <AnimatePresence mode={'wait'} initial={true}>
      <motion.div
        initial={'hidden'}
        animate={'enter'}
        exit={'exit'}
        variants={{
          hidden: { opacity: 0, x: 30, y: 0 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 30, y: 0 },
        }}
        transition={{ duration: 0.6, type: 'easeInOut' }}
        style={{ position: 'relative' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </Box>
);

Component.displayName = 'RightPane';
