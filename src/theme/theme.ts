import { Fonts, FontSizes, Colors } from './theme-definitions';

import { fonts, fontSizes } from './styles/fonts';
import { space } from './styles/spacing';
import { colors } from './styles/colors';

interface Theme {
  fonts: Fonts;
  fontSizes: FontSizes;
  space: number[];
  colors: Colors;
}

export const theme: Theme = {
  fonts,
  fontSizes,
  space,
  colors
};
