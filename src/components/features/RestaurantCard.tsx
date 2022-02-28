import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';

import { theme } from '../../theme/theme';
import { TextComponent } from '../subcomponents/TextComponent';

export type RestaurantCardProps = {
  key: number;
  name: string;
  adress: string;
  city: string;
  grade: number;
};

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  adress,
  city,
  grade
}) => {
  return (
    <Card style={style.card}>
      <Card.Cover
        source={{
          uri: `https://picsum.photos/500?random=${Math.floor(
            Math.random() * 100
          )}`
        }}
      />
      <Card.Content style={style.cardContent}>
        <View>
          <TextComponent type={'heading'} size={'h4'}>
            {name}
          </TextComponent>
          <TextComponent>{adress}</TextComponent>
          <TextComponent type={'heading'} size={'p'}>
            {city}
          </TextComponent>
        </View>
        <View style={style.gradeContainer}>
          <TextComponent
            style={style.grade}
            type={'heading'}
            size={'h3'}
            color={'darkGrey'}
          >
            {grade}
          </TextComponent>
        </View>
      </Card.Content>
    </Card>
  );
};

const style = StyleSheet.create({
  card: {
    width: 300,
    marginTop: theme.space[2],
    marginBottom: theme.space[2]
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  gradeContainer: { flex: 1 },
  grade: {
    textAlign: 'right',
    paddingTop: theme.space[2]
  }
});
