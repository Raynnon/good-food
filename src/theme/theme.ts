import { Fonts, FontSizes, Background } from './theme-definitions';

import { fonts, fontSizes } from './styles/fonts';
import { space } from './styles/spacing';
import { background } from './styles/colors';

interface Theme {
  fonts: Fonts;
  fontSizes: FontSizes;
  space: number[];
  background: Background;
}

export const theme: Theme = {
  fonts,
  fontSizes,
  space,
  background
};
