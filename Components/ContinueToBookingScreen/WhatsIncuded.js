import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WhatsIncluded = () => {
  const data = [
    {
      id: '1',
      iconName: 'directions-car',
      header: 'Get the car model or similar you selected',
      contentText:
        "We will try to match your model preference. A car from the same category will be offered if your chosen model isn't available.",
    },
    {
      id: '2',
      iconName: 'location-on',
      header: 'Door-to-door delivery',
      contentText: 'An easy and convenient way of getting your car in Abu Dhabi for 90 AED.',
    },
    {
      id: '3',
      iconName: 'verified-user',
      header: 'Free cancellation',
      contentText: 'Lock in this price today, cancel free of charge up to 24 hours before trip start.',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Icon name={item.iconName} size={30} color={'red'} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemHeader}>{item.header}</Text>
        <Text style={styles.itemText}>{item.contentText}</Text>
      </View>
    </View>
  );

  return (
    <View >
        <Text style={styles.title}>What's included</Text>
    <View style={styles.container}>
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 20,
    elevation: 2,
    padding: 20,
    marginBottom: 60,

  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  itemTextContainer: {
    marginLeft: 30,
    flex: 1,
  },
  itemHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemText: {
    color: 'gray',
  },
  separator: {

    height: 0.5,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
});

export default WhatsIncluded;
