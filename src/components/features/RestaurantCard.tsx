import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import { theme } from '../../theme/theme';
import { TextComponent } from '../subcomponents/TextComponent';
import { Spacer } from '../subcomponents/Spacer';

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
        <Spacer>
          <TextComponent type={'heading'} size={'h4'}>
            {name}
          </TextComponent>
          <TextComponent>{adress}</TextComponent>
          <TextComponent type={'heading'} size={'p'}>
            {city}
          </TextComponent>
        </Spacer>

        <Spacer flex={1}>
          <TextComponent
            style={style.grade}
            type={'heading'}
            size={'h3'}
            color={'darkGrey'}
          >
            {grade}
          </TextComponent>
        </Spacer>
      </Card.Content>
    </Card>
  );
};

const style = StyleSheet.create({
  card: {
    width: 376,
    marginTop: theme.space[2],
    marginBottom: theme.space[2]
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  grade: {
    textAlign: 'right',
    paddingTop: theme.space[2]
  }
});
