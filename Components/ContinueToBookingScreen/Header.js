import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const RentalsHeader = ({ onMenuPress }) => {

const navigation = useNavigation();

const goBack = () => {
  navigation.goBack();
}

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Icon name="chevron-left" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Car rental</Text>
      <TouchableOpacity onPress={onMenuPress}>
        <Icon name="menu" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default RentalsHeader;
