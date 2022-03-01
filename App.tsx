import React from 'react';
import { StatusBar } from 'react-native';

import { Navigation } from './src/components/Navigation';

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
    <>
      <Navigation />
      <StatusBar barStyle="default" />
    </>
  );
}
