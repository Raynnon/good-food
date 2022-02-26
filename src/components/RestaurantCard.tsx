import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import { sizes, fontSizes } from '../utils/sizes';

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
          <Title>{name}</Title>
          <Paragraph>{adress}</Paragraph>
          <Paragraph>{city}</Paragraph>
        </View>
        <View style={style.gradeContainer}>
          <Text style={style.grade}>{grade}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const style = StyleSheet.create({
  card: { marginTop: sizes.sm, marginBottom: sizes.sm },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  gradeContainer: { flex: 1 },
  grade: {
    textAlign: 'right',
    fontSize: fontSizes.lg,
    paddingTop: sizes.sm
  }
});
