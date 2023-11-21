/**
 * @fileoverview Defines Main Panel organism.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Box, BoxProps } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

export type Props = BoxProps & {
  title: string;
  children: ReactNode;
};

export const Component: FC<Props> = ({ title, children, ...props }: Props) => (
  <AnimatePresence
    mode={'wait'}
    initial={true}
    onExitComplete={() => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0 });
      }
    }}
  >
    <motion.article
      initial={'hidden'}
      animate={'enter'}
      exit={'exit'}
      variants={{
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -0, y: 20 },
      }}
      transition={{ duration: 0.6, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      {title && (
        <Head>
          <title>{`${title} - DeltaHub`}</title>
          <meta name={'twitter:title'} content={`${title} - DeltaHub`} />
          <meta property={'og:title'} content={`${title} - DeltaHub`} />
        </Head>
      )}
      <Box {...props}>{children}</Box>
    </motion.article>
  </AnimatePresence>
);

Component.displayName = 'MainPanel';
