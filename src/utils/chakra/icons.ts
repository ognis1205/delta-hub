/**
 * @fileoverview Defines Chakra UI Icon Utility.
 * @copyright Shingo OKAWA 2023
 */
import { createElement } from 'react';
import {
  PiGithubLogoFill,
  PiGoogleLogoFill,
  PiPlusBold,
  PiShareNetworkFill,
  PiTrayBold,
  PiHouseBold,
  PiInfoBold,
  PiQuestionBold,
} from 'react-icons/pi';

const icons = {
  home: PiHouseBold,
  info: PiInfoBold,
  question: PiQuestionBold,
  github: PiGithubLogoFill,
  google: PiGoogleLogoFill,
  plus: PiPlusBold,
  share: PiShareNetworkFill,
  notify: PiTrayBold,
};

export type IconName = keyof typeof icons;

export const iconOf = (name: IconName) => createElement(icons[name]);

export const iconAs = (name: IconName) => icons[name];
