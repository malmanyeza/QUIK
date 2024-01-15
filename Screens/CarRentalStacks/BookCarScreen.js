import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../Components/Header';
import RentalsHeader from '../../Components/ContinueToBookingScreen/Header';
import CarView from '../../Components/ContinueToBookingScreen/CarView';
import DeliveryOptions from '../../Components/BookCar/DeliveryOptions';
import DeliveryAndReturnDetails from '../../Components/BookCar/DeliveryAndReturnDetails';
import Insurance from '../../Components/BookCar/Insurance';
import SecondaryDriver from '../../Components/BookCar/SecondaryDriver';
import PriceBreakdown from '../../Components/BookCar/PriceBreakdown';
import Button from '../../Components/Button';

const BookCarScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
        <RentalsHeader />
        <ScrollView style={styles.carsContainer}>
          <CarView />
          <DeliveryOptions />
          <DeliveryAndReturnDetails />
          <Insurance />
          <SecondaryDriver />
          <PriceBreakdown />
        </ScrollView>
        <Button title="Continue to payment" activated={true} color={'red'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carsContainer: {
    paddingBottom: 100,
  },
});

export default BookCarScreen;
