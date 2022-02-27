import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { SearchLocation } from './src/components/SearchLocation';

import {
  useFonts as useRoboto,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';
import {
  useFonts as useNunito,
  Nunito_400Regular
} from '@expo-google-fonts/nunito';

export default function App() {
  const [robotoLoaded]: [boolean, Error | null] = useRoboto({
    Roboto_500Medium
  });

  const [nunitoLoaded]: [boolean, Error | null] = useNunito({
    Nunito_400Regular
  });

  if (!robotoLoaded || !nunitoLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SearchLocation />
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: '#f5f5f5'
  }
});
