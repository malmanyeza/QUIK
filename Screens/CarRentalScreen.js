import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import MotorCardsList from '../Components/CarRentalScreen/MotorCardsList';
import DeliveryTimeModal from '../Components/CarRentalScreen/DeliveryTimeModal';

const CarRentalScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MotorCardsList />
        <DeliveryTimeModal 
            isVisible={true}
            onClose={() => {}}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
  },
});

export default CarRentalScreen;
