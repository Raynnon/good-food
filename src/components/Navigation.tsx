import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { SearchLocation } from './features/SearchLocation';

import { theme } from '../theme/theme';

const RestaurantRoute = () => <SearchLocation />;
const MapRoute = () => <Text>Map</Text>;
const OptionsRoute = () => <Text>Options</Text>;

export const Navigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'restaurants', title: 'Restaurants', icon: 'silverware-fork-knife' },
    { key: 'map', title: 'Map', icon: 'map-outline' },
    { key: 'options', title: 'Options', icon: 'cog-outline' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    restaurants: RestaurantRoute,
    map: MapRoute,
    options: OptionsRoute
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor={theme.colors.white}
      barStyle={styles.navigationBar}
    />
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: theme.colors.primary
  }
});
