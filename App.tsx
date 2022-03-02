import React, { useEffect } from 'react';
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

import { restaurantsRequest } from './src/services/restaurants/restaurants-service';

export default function App() {
  useEffect(() => {
    const restaurants = async () => {
      try {
        const result = await restaurantsRequest();

        console.log(result);
      } catch (e) {
        console.log(e);
      }
    };

    restaurants();
  }, []);

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
