import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../Components/Header';
import CityRectangle from '../Components/HomeScreen/CityRectangle';
import FeatureButtons from '../Components/HomeScreen/FeatureButtons';
import GetMore from '../Components/HomeScreen/GetMore';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <Header />
    <ScrollView >
      <CityRectangle />
      <FeatureButtons />
      <GetMore />
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
