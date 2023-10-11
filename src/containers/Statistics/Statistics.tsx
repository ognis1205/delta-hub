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
  data: number[];
};

const Container: FC<Props> = ({ labels, data }: Props) => {
  const [color] = useToken('colors', ['deltaColor1.400']);

  const [r, g, b] = hex2rgb(color);

  const barData = {
    labels: labels,
    datasets: [
      {
        data: data,
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

  return <Bar data={barData} options={options} />;
};

Container.displayName = 'ShareStats';

export default Container;
