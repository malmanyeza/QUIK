import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookCarScreen from './BookCarScreen';
import ContinueToBookingScreen from './ContinueToBookingScreen';
import CarRentalScreen from './CarRentalScreen';

const Stack = createStackNavigator();

const CarRentalStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CarRental" component={CarRentalScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ContinueToBooking" component={ContinueToBookingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BookCar" component={BookCarScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default CarRentalStack;
