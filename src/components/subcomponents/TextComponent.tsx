import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { theme } from '../../theme/theme';
import { Colors, Fonts, FontSizes } from '../../theme/theme-definitions';

interface StyleInterface {
  [key: string]: string | number;
}

export type TextComponentProps = {
  style?: StyleInterface;
  type?: string;
  size?: string;
  color?: string;
};

export const TextComponent: React.FC<TextComponentProps> = ({
  style,
  type = 'body',
  size = 'p',
  color = 'darkGrey',
  ...props
}) => {
  const defaultStyles = StyleSheet.create({
    text: {
      fontFamily: theme.fonts[type as keyof Fonts],
      fontSize: theme.fontSizes[size as keyof FontSizes],
      color: theme.colors[color as keyof Colors]
    }
  });

  return <Text style={[defaultStyles.text, style]}>{props.children}</Text>;
};
