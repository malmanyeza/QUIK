import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalButton from './ModalButton';
import Modal from 'react-native-modal';

const countriesData = [
  { id: 1, name: 'UAE', flag: require('../../assets/flags/uae.png') },
  { id: 2, name: 'South Africa', flag: require('../../assets/flags/sa.png') },
  { id: 3, name: 'United States of Africa', flag: require('../../assets/flags/usa.png') },
  { id: 4, name: 'Zimbabwe', flag: require('../../assets/flags/zimbabwe.png') },
  // Add more countries as needed
];

const CountriesList = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity style={styles.countryItem} onPress={() => handleCountryPress(item)}>
      <Image source={item.flag} style={styles.flag} />
      <Text style={styles.countryName}>{item.name}</Text>
      <Icon name="chevron-right" size={20} color="black" />
    </TouchableOpacity>
  );

  const handleCountryPress = (country) => {
    // Handle country press logic
    console.log(`Pressed: ${country.name}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.currentLocationContainer} onPress={() => setModalVisible(true)}>
        <Ionicons name="locate" size={20} color="black" style={styles.locationIcon} />
        <Text style={styles.currentLocationText}>Use my current location</Text>
      </TouchableOpacity>
      <FlatList
        data={countriesData}
        renderItem={renderCountryItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal
        animationType="slide"
        isVisible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Confirm your sity</Text>
          <Text style={styles.modalText}>You can always change city from preferences in your profile</Text>
          <ModalButton title="Use current location" activated={true} />
          <ModalButton title="Cancel" activated={false} onPress={()=>setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  currentLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginVertical:20
  },
  locationIcon: {
    marginRight: 10,
  },
  currentLocationText: {
    color: 'black',
    fontSize: 16,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  flag: {
    width: 40,
    height: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  countryName: {
    color: 'black',
    flex: 1,
  },
  modalContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    padding: 10,
  },
closeModalText: {
    color: 'gray',
    fontSize: 22,
    padding: 20,
},
modalHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    paddingLeft:5,
    marginTop: 20,
},
modalText: {
    paddingLeft:5,
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
},
modal:{
    justifyContent: 'flex-end',
    margin: 0,
}
});

export default CountriesList;
