import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantCard, RestaurantCardProps } from './RestaurantCard';

import { Spacer } from '../subcomponents/Spacer';

export const SearchLocation = () => {
  const [search, setSearch] = useState('');

  const restaurants: RestaurantCardProps[] = [
    {
      key: 1,
      name: "L'olive Bleue",
      adress: '25, rue du fief',
      city: 'Le Teich',
      grade: 4.7
    },
    {
      key: 2,
      name: 'Chez Marcel',
      adress: '25, rue du Moulin',
      city: 'Le Teich',
      grade: 3.1
    },
    {
      key: 3,
      name: 'Goinfrez vous!',
      adress: '25, avenue Boris Vian',
      city: 'Le Teich',
      grade: 4.1
    },
    {
      key: 4,
      name: 'Can Sergi',
      adress: '5, rue de la paix',
      city: 'Le Teich',
      grade: 2.3
    },
    {
      key: 5,
      name: 'Veganland',
      adress: '12, impasse de Leyre',
      city: 'Le Teich',
      grade: 3.4
    }
  ];

  return (
    <Spacer style={styles.container} flex={1} padding={[2, 0, 0, 0]}>
      <Searchbar
        style={styles.searchbar}
        onChangeText={(text) => setSearch(text)}
        onIconPress={() => console.log(search)}
        value={search}
      />

      <Spacer style={styles.cardsContainer} flex={1}>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => (
            <RestaurantCard
              key={item.key}
              name={item.name}
              adress={item.adress}
              city={item.city}
              grade={item.grade}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Spacer>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  cardsContainer: {
    alignItems: 'center'
  },
  searchbar: { width: 400 }
});
