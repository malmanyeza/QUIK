import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Select a country</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 40,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    borderWidth: 1,
    borderColor: '#8CA1A5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  title: {
    color: 'black',
    fontSize: 18,
  },
});

export default Header;
