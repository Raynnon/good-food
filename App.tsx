import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { SearchLocation } from './src/components/SearchLocation';

import { theme } from './src/theme/theme';

import {
  useFonts as useRoboto,
  Roboto_400Regular
} from '@expo-google-fonts/roboto';
import {
  useFonts as useNunito,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

export default function App() {
  const [robotoLoaded]: [boolean, Error | null] = useRoboto({
    Roboto_400Regular
  });

  const [nunitoLoaded]: [boolean, Error | null] = useNunito({
    Nunito_700Bold
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
    paddingTop: theme.space[2],
    backgroundColor: theme.background.primary
  }
});
