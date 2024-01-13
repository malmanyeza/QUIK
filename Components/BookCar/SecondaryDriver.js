import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SecondaryDriver = () => {
  const [ noDriverActive, setNoDriverActive] = useState(true);
  const [driverIncludedActive, setDriverIncludedActive] = useState(false);

  const handlenoDriverPress = () => {
    setNoDriverActive(true);
    setDriverIncludedActive(false);
  };

  const handledriverIncludedPress = () => {
    setNoDriverActive(false);
    setDriverIncludedActive(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Secondary Driver
      </Text>
      <TouchableOpacity
        style={[styles.optionContainer, noDriverActive && styles.activeContainer]}
        onPress={handlenoDriverPress}
      >
        <View>
          <Text style={styles.title}>Without secondary driver</Text>
          <Text style={styles.price}>Included, AED 0</Text>
        </View>
        <View style={[styles.circle, noDriverActive && styles.activeCircle, { borderWidth: noDriverActive ? null : 1 }]}>
          {noDriverActive && <Icon name="done" size={20} color="white" />}
        </View>
      </TouchableOpacity>

      {/* Door-to-door Container */}
      <TouchableOpacity
        style={[styles.optionContainer, driverIncludedActive && styles.activeContainer]}
        onPress={handledriverIncludedPress}
      >
        <View>
          <Text style={styles.title}>Include secondary driver</Text>
          <Text style={styles.price}>AED 90</Text>
          <Text style={styles.description}>Please reach out to Customer Service to provide documents. *Secondary driver has to be present at handover as well.</Text>
        </View>
        
        <View style={[styles.circle, driverIncludedActive && styles.activeCircle, { borderWidth: driverIncludedActive ? null : 1 }]}>
          {driverIncludedActive && <Icon name="done" size={20} color="white" />}
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

export default SecondaryDriver;
