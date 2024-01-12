import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CarFeaturesList = () => {


const features = [
    'Unlimited mileage',
    'Free cancellation',
    'Free delivery',
    'Free pickup',
    'Free fuel',
    'Free insurance',
    'Free maintenance',
    'Free cleaning',
    'Free parking',
    'Free toll tag',
    'Free child seat',
    'Free GPS',
    'Free additional driver',
    'Free roadside assistance',
    'Free car replacement',
  ];

  const renderFeatureItem = ({ item }) => (
    <View style={styles.featureContainer}>
      <Text style={styles.featureText}>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={features}
      renderItem={renderFeatureItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.featureListContainer}
    />
  );
};

const styles = StyleSheet.create({
  featureListContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  featureContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  featureText: {
    color: 'gray',
  },
});

export default CarFeaturesList;
