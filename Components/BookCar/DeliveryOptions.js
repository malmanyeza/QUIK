import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DeliveryOptions = () => {
  const [selfPickupActive, setSelfPickupActive] = useState(false);
  const [doorToDoorActive, setDoorToDoorActive] = useState(true);

  const handleSelfPickupPress = () => {
    setSelfPickupActive(true);
    setDoorToDoorActive(false);
  };

  const handleDoorToDoorPress = () => {
    setSelfPickupActive(false);
    setDoorToDoorActive(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Delivery Options
      </Text>
      <TouchableOpacity
        style={[styles.optionContainer, selfPickupActive && styles.activeContainer]}
        onPress={handleSelfPickupPress}
      >
        <View>
          <Text style={styles.title}>Self-pickup</Text>
          <Text style={styles.price}>Included, AED 0</Text>
        </View>
        <View style={[styles.circle, selfPickupActive && styles.activeCircle, { borderWidth: selfPickupActive ? null : 1 }]}>
          {selfPickupActive && <Icon name="done" size={20} color="white" />}
        </View>
      </TouchableOpacity>

      {/* Door-to-door Container */}
      <TouchableOpacity
        style={[styles.optionContainer, doorToDoorActive && styles.activeContainer]}
        onPress={handleDoorToDoorPress}
      >
        <View>
          <Text style={styles.title}>Door-to-door</Text>
          <Text style={styles.price}>AED 90</Text>
          <Text style={styles.description}>Get your car within 2 hours of your selected time slot. This is the easiest way to get your car.</Text>
        </View>
        <View style={[styles.tagContainer]}>
          <Text style={styles.tagText}>Recommended</Text>
        </View>
        <View style={[styles.circle, doorToDoorActive && styles.activeCircle, { borderWidth: doorToDoorActive ? null : 1 }]}>
          {doorToDoorActive && <Icon name="done" size={20} color="white" />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    position: 'relative',
    marginVertical: 20,
  },
  activeContainer: {
    borderColor: 'red',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
  price: {
    color: 'red',
    margin: 10,
  },
  description: {
    margin: 10,
    color: 'black',
    width: 200,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: {
    backgroundColor: 'red',
  },
  tagContainer: {
    position: 'absolute',
    top: -15,
    right: 10,
    backgroundColor: '#D1F9D1',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#28A745',
  },
  tagText: {
    color: '#28A745',
  },
});

export default DeliveryOptions;
