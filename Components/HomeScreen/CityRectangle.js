import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CityRectangle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Need to change your city?</Text>
      <Text style={styles.smallText}>Your currently selected city is...</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Select City</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Use Current Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DBDFEA',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  smallText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#ECF8F9',
    borderRadius: 50,
    padding: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default CityRectangle;
