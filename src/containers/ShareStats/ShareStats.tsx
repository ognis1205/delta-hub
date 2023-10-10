/**
 * @fileoverview Defines ShareStats.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { FC } from 'react';
import { useToken } from '@chakra-ui/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { hex2rgb } from '@/utils/chart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export type Props = {
  labels: string[];
  stats: number[];
};

const Component: FC<Props> = ({ labels, stats }: Props) => {
  const [color] = useToken('colors', [
    'deltaColor1.400',
  ]);
  const [r, g, b] = hex2rgb(color);

  const data = {
    labels: labels,
    datasets: [
      {
        data: stats,
        backgroundColor: `rgba(${r}, ${g}, ${b}, 0.6)`,
        borderColor: `rgba(${r}, ${g}, ${b}, 0.6)`,
        order: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

Component.displayName = 'ShareStats';

export default Component;
