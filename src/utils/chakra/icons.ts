/**
 * @fileoverview Defines Chakra UI Icon Utility.
 * @copyright Shingo OKAWA 2023
 */
import { PiGithubLogoFill, PiGoogleLogoFill } from 'react-icons/pi';

const icons = {
  github: PiGithubLogoFill, 
  google: PiGoogleLogoFill, 
};

export type IconName = keyof typeof icons;

export const iconAs = (name: IconName) => icons[name];
