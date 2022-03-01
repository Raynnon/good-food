import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { SearchLocation } from './src/components/features/SearchLocation';
import { Spacer } from './src/components/subcomponents/Spacer';

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
    <Spacer style={styles.container} padding={[2, 0, 0, 0]}>
      <SearchLocation />
      <StatusBar barStyle="default" />
    </Spacer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.lightGrey
  }
});
