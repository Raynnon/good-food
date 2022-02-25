import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const SearchLocation = () => {
  const [search, setSearch] = useState('');

  return (
    <View>
      <Searchbar
        style={styles.searchbar}
        onChangeText={(text: string) => setSearch(text)}
        onIconPress={() => console.log(search)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar: { width: 300 }
});
