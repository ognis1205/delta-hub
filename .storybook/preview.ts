/**
 * @fileoverview Defines Storybook preview.
 * @copyright Shingo OKAWA 2023
 */
import type { Preview } from "@storybook/react";
import { theme } from "@/app/providers";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: {
      theme,
    },
  },
};

export default preview;
