import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Insurance = () => {
  const [comprehensiveActive, setComprehensiveActive] = useState(false);
  const [cdwActive, setCdwActive] = useState(true);

  const handleSelfPickupPress = () => {
    setComprehensiveActive(true);
    setCdwActive(false);
  };

  const handleDoorToDoorPress = () => {
    setComprehensiveActive(false);
    setCdwActive(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Insurance
      </Text>
      <TouchableOpacity
        style={[styles.optionContainer, comprehensiveActive && styles.activeContainer]}
        onPress={handleSelfPickupPress}
      >
        <View>
          <Text style={styles.title}>Comprehensive</Text>
          <Text style={styles.price}>Included, AED 0</Text>
          <Text style={styles.description}>In the case of an accident where you are at fault, your maximum liability will be equivalent to the insurance excess. Police report required</Text>
        </View>
        <View style={[styles.circle, comprehensiveActive && styles.activeCircle, { borderWidth: comprehensiveActive ? null : 1 }]}>
          {comprehensiveActive && <Icon name="done" size={20} color="white" />}
        </View>
      </TouchableOpacity>

      {/* Door-to-door Container */}
      <TouchableOpacity
        style={[styles.optionContainer, cdwActive && styles.activeContainer]}
        onPress={handleDoorToDoorPress}
      >
        <View>
          <Text style={styles.title}>CDW</Text>
          <Text style={styles.price}>AED 35/day</Text>
          <Text style={styles.description}>Avoid paying the insurance excess even if you're at fault. Valid for 25 years old drivers and above. Police report required</Text>
        </View>
        <View style={[styles.tagContainer]}>
          <Text style={styles.tagText}>Recommended</Text>
        </View>
        <View style={[styles.circle, cdwActive && styles.activeCircle, { borderWidth: cdwActive ? null : 1 }]}>
          {cdwActive && <Icon name="done" size={20} color="white" />}
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

export default Insurance;
