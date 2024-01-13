import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DeliveryAndReturnDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Delivery</Text>
      <View style={styles.detailsContainer}>
        
        <View style={styles.row}>
          <Icon name="calendar" size={20} color="black" />
          <View style={styles.dateAndTime}>
            <Text style={styles.date}>Sat, Jan 13</Text>
            <Text style={styles.time}>14:00 - 16:00</Text>
          </View>
          <TouchableOpacity>
            <Icon name="pencil" size={20} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker" size={20} color="black" />
          <View style={styles.dateAndTime}>
            <Text style={styles.smallHeader}>Please select address</Text>
            <Text style={styles.addressText}>No address selected</Text>
          </View>
          <TouchableOpacity>
            <Icon name="pencil" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.header}>Return</Text>
      <View style={styles.detailsContainer}>
        
        <View style={styles.row}>
          <Icon name="calendar" size={20} color="black" />
          <View style={styles.dateAndTime}>
            <Text style={styles.date}>Sat, Jan 13</Text>
            <Text style={styles.time}>14:00 - 16:00</Text>
          </View>
          <TouchableOpacity>
            <Icon name="pencil" size={20} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker" size={20} color="black" />
          <View style={styles.dateAndTime}>
            <Text style={styles.smallHeader}>Please select address</Text>
            <Text style={styles.addressText}>No address selected</Text>
          </View>
          <TouchableOpacity>
            <Icon name="pencil" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    padding: 15,
    marginBottom: 20,

  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 20,
  },
  dateAndTime: {
    flex: 1,
    marginLeft: 20,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: 'black',
  },
  smallHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  addressText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default DeliveryAndReturnDetails;
