/**
 * @fileoverview Defines Timeline molecule.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { VStack, StackProps, Box } from '@chakra-ui/react';
import { FC } from 'react';

import {
  Component as TimelineHeader,
  Props as TimelineHeaderProps,
} from '@/atoms/TimelineHeader';
import {
  Component as TimelineItem,
  Props as TimelineItemProps,
} from '@/atoms/TimelineItem';

export type Props = Omit<
  StackProps,
  keyof Pick<
    StackProps,
    'textAlign' | 'align' | 'mb' | 'marginBottom' | 'm' | 'my' | 'margin'
  >
> & {
  month: TimelineHeaderProps['month'];
  year: TimelineHeaderProps['year'];
  items: TimelineItemProps[];
};

export const Component: FC<Props> = ({
  month,
  year,
  items,
  ...props
}: Props) => (
  <VStack {...props} textAlign={'start'} align={'start'}>
    <Box zIndex={5} w={'100%'}>
      <TimelineHeader month={month} year={year} my={5} />
      <Box>
        {items.map((item, i) => {
          return (
            <TimelineItem
              key={i}
              {...item}
              skipTrail={i === items.length - 1}
            />
          );
        })}
      </Box>
    </Box>
  </VStack>
);

Component.displayName = 'Timeline';
