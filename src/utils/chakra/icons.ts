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
  PiBookOpenBold,
  PiStarBold,
  PiPackageBold,
  PiBinocularsBold,
  PiUserBold,
  PiUserCirclePlusBold,
  PiGearBold,
  PiListBold,
  PiMagnifyingGlassBold,
  PiCaretCircleDoubleRightBold,
  PiMapPinBold,
  PiEnvelopeBold,
  PiLinkBold,
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
  overview: PiBookOpenBold,
  star: PiStarBold,
  catalog: PiPackageBold,
  explore: PiBinocularsBold,
  profile: PiUserBold,
  editStatus: PiUserCirclePlusBold,
  gear: PiGearBold,
  menu: PiListBold,
  search: PiMagnifyingGlassBold,
  caretRight: PiCaretCircleDoubleRightBold,
  map: PiMapPinBold,
  email: PiEnvelopeBold,
  link: PiLinkBold,
};

export type IconName = keyof typeof icons;

export const iconOf = (name: IconName) => createElement(icons[name]);

export const iconAs = (name: IconName) => icons[name];
