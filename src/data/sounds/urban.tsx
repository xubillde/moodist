import {
  BiSolidCoffeeAlt,
  BiSolidTrain,
  BiSolidPlaneAlt,
} from 'react-icons/bi/index';
import { FaCity, FaRoad } from 'react-icons/fa/index';
import { PiRoadHorizonFill, PiSirenBold } from 'react-icons/pi/index';

import type { Category } from '../types';

export const urban: Category = {
  icon: <FaCity />,
  id: 'urban',
  sounds: [
    {
      icon: <BiSolidCoffeeAlt />,
      id: 'cafe',
      label: 'Cafe',
      src: '/sounds/urban/cafe.mp3',
    },
    {
      icon: <PiRoadHorizonFill />,
      id: 'highway',
      label: 'Highway',
      src: '/sounds/urban/highway.mp3',
    },
    {
      icon: <FaRoad />,
      id: 'road',
      label: 'Road',
      src: '/sounds/urban/road.mp3',
    },
    {
      icon: <PiSirenBold />,
      id: 'ambulance-siren',
      label: 'Ambulance Siren',
      src: '/sounds/urban/ambulance-siren.mp3',
    },
    {
      icon: <BiSolidTrain />,
      id: 'train',
      label: 'Train',
      src: '/sounds/urban/train.mp3',
    },
    {
      icon: <BiSolidTrain />,
      id: 'inside-a-train',
      label: 'Inside a Train',
      src: '/sounds/urban/inside-a-train.mp3',
    },
    {
      icon: <BiSolidPlaneAlt />,
      id: 'airport',
      label: 'Airport',
      src: '/sounds/urban/airport.mp3',
    },
    {
      icon: <BiSolidPlaneAlt />,
      id: 'airplane',
      label: 'Airplane',
      src: '/sounds/urban/airplane.mp3',
    },
  ],
  title: 'Urban',
};