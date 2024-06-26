/**
 * @fileoverview Defines Chakra UI Icon Utility.
 * @author Shingo OKAWA <shingo.okawa.g.h.c@gmail.com>
 * @copyright Copyright (C) 2024 Shingo OKAWA and a number of other contributors
 * @license Apache-2.0
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
  PiUsersBold,
  PiArrowsOutLineVerticalBold,
  PiPaperPlaneTiltBold,
  PiPawPrintBold,
  PiCaretDownBold,
  PiDotsSixVerticalBold,
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
  connection: PiUsersBold,
  expand: PiArrowsOutLineVerticalBold,
  request: PiPaperPlaneTiltBold,
  create: PiPawPrintBold,
  more: PiCaretDownBold,
  grab: PiDotsSixVerticalBold,
};

export type IconName = keyof typeof icons;

export const iconOf = (name: IconName) => createElement(icons[name]);

export const iconAs = (name: IconName) => icons[name];
