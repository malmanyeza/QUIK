import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DestinationPullup from '../../Components/DestinationScreen/DestinationModalize';

const DestinationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Current Location</Text>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.changeLocationText}>Change Location</Text>
      </TouchableOpacity>

      <DestinationPullup />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  changeLocationText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
});

export default DestinationScreen;
