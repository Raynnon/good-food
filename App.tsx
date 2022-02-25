import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import { SearchLocation } from './src/components/SearchLocation';

export default function App() {
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
