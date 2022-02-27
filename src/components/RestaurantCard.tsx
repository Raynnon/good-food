import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import { theme } from '../theme/theme';
import { fontSizes } from '../theme/styles/fonts';

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
          <Title style={style.restaurantName}>{name}</Title>
          <Paragraph style={style.text}>{adress}</Paragraph>
          <Paragraph style={style.text}>{city}</Paragraph>
        </View>
        <View style={style.gradeContainer}>
          <Text style={style.grade}>{grade}</Text>
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
  restaurantName: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.h4
  },
  text: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.p
  },
  grade: {
    textAlign: 'right',
    fontSize: theme.fontSizes.h2,
    paddingTop: theme.space[2]
  }
});
