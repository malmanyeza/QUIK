import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PriceBreakdown = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Price breakdown</Text>

      {/* Rental Period */}
      <View style={styles.row}>
        <View>
        <Text style={styles.text}>Rental period</Text>
        <Text style={styles.grayText}>AED / day</Text>
        </View>
        <Text style={styles.price}>AED 110</Text>
      </View>

      {/* CDW */}
      <View style={styles.row}>
        <View>
        <Text style={styles.text}>CDW</Text>
        <Text style={styles.grayText}>AED 35/ day</Text>
        </View>
        <Text style={styles.price}>AED 35</Text>
      </View>

      {/* Door-to-door Delivery */}
      <View style={styles.row}>
        <Text style={styles.text}>Door-to-door delivery</Text>
        <Text style={styles.price}>AED 90</Text>
      </View>

      {/* Secondary Driver */}
      <View style={styles.row}>
        <View>
        <Text style={styles.text}>Secondary driver</Text>
        <Text style={styles.grayText}>AED 35 / day</Text>
        </View>
        <Text style={styles.price}>AED 35</Text>
      </View>

      {/* Total for 1 day */}
      <View style={[styles.row, styles.totalRow]}>
        <Text style={styles.totalText}>Total for 1 day</Text>
        <Text style={styles.totalPrice}>AED 270</Text>
      </View>
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
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  grayText: {
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 16,
    color: 'black',
  },
  totalRow: {
    marginTop: 30,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default PriceBreakdown;
