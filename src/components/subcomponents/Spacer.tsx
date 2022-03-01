import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../../theme/theme';

interface StyleInterface {
  [key: string]: string | number;
}

export type SpacerProps = {
  style?: StyleInterface;
  flex?: number;
  margin?: number | number[];
  padding?: number | number[];
};

export const Spacer: React.FC<SpacerProps> = ({
  style,
  flex = 1,
  margin = 0,
  padding = 0,
  ...props
}) => {
  const spacesAssignment = (
    spaces: number | number[],
    direction: string
  ): number | string => {
    if (typeof spaces === 'number') {
      return theme.space[spaces];
    } else if (spaces.length === 2 || spaces.length === 4) {
      switch (direction) {
        case 'top':
          return theme.space[spaces[0]];
          break;
        case 'right':
          return theme.space[spaces[1]];
          break;
        case 'bottom':
          return theme.space[spaces[2]] ?? theme.space[spaces[0]];
          break;
        case 'left':
          return theme.space[spaces[3]] ?? theme.space[spaces[1]];
          break;
        default:
          return 0;
      }
    } else {
      return 0;
    }
  };

  const defaultStyles = StyleSheet.create({
    spacer: {
      flex,
      marginTop: spacesAssignment(margin, 'top'),
      marginRight: spacesAssignment(margin, 'right'),
      marginBottom: spacesAssignment(margin, 'bottom'),
      marginLeft: spacesAssignment(margin, 'left'),
      paddingTop: spacesAssignment(padding, 'top'),
      paddingRight: spacesAssignment(padding, 'right'),
      paddingBottom: spacesAssignment(padding, 'bottom'),
      paddingLeft: spacesAssignment(padding, 'left')
    }
  });

  return <View style={[defaultStyles.spacer, style]}>{props.children}</View>;
};
