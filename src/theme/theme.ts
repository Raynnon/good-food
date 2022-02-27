import { fonts, fontSizes } from './styles/fonts';
import { space } from './styles/spacing';
import { Fonts, FontSizes } from './theme-definitions';

interface Theme {
  fonts: Fonts;
  fontSizes: FontSizes;
  space: number[];
}

export const theme: Theme = {
  fonts,
  fontSizes,
  space
};
