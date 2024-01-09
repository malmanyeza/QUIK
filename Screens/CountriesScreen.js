import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Components/CountriesScreen/Header';
import CountriesList from '../Components/CountriesScreen/CountriesList';

const CountriesScreen = () => {
  return (
    <View style={styles.container}>
        <Header />
        <CountriesList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CountriesScreen;
