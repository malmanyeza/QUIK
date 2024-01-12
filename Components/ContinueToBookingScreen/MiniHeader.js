import React,{useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useModalsContext } from '../../hooks/modalsContext';

const MiniHeader = ({ isRounded }) => {

    const { deliveryDate, returnDate, deliveryTime, returnTime } = useModalsContext();

  const containerStyle = isRounded
    ? { ...styles.miniHeader, ...styles.roundedContainer }
    : styles.miniHeader;

  return (
    <TouchableOpacity style={containerStyle} activeOpacity={1}>
      <Icon name="calendar" size={30} color="black" />
      <View style={styles.deliferyInfo}>
        <Text style={styles.dateText}>{deliveryDate}</Text>
        <Text style={styles.deliveryInfoText}>{deliveryTime}</Text>
      </View>
      <Text>-</Text>
      <View style={styles.deliferyInfo}>
        <Text style={styles.dateText}>{returnDate}</Text>
        <Text style={styles.deliveryInfoText}>{returnTime}</Text>
      </View>
      <Icon name="pencil" size={30} color="#F44336" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  miniHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 5,
  },
  roundedContainer: {
    margin: 20,
    borderRadius: 20,
  },
  deliferyInfo: {
  },
  deliveryInfoText: {
    fontSize: 12,
    color: 'gray',
  },
  dateText: {
    marginBottom: 5,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MiniHeader;
