import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { LogBox, StatusBar } from 'react-native';
import PhoneInputScreen from './Screens/PhoneInputScreen';
import PhoneVerificationScreen from './Screens/PhoneVerificationScreen';
import PasswordScreen from './Screens/PasswordScreen';
import UsernameScreen from './Screens/UsernameScreen';
import BiometricScreen from './Screens/BiometricScreen';
import HomeScreen from './Screens/HomeScreen';
import CountriesScreen from './Screens/CountriesScreen';
import CarRentalScreen from './Screens/CarRentalScreen';
import { ModalsProvider } from './hooks/modalsContext';
import ContinueToBookingScreen from './Screens/ContinueToBookingScreen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    // Delay for 2 seconds (2000 milliseconds) before hiding the splash screen
    const timeoutId = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    LogBox.ignoreAllLogs();
    // Clear the timeout if the component unmounts before the delay completes
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ModalsProvider>
    <>
      <StatusBar
        translucent
        backgroundColor="#DDE6ED"
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ContinueToBooking" component={ContinueToBookingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CarRental" component={CarRentalScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Countries" component={CountriesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Biometric" component={BiometricScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Username" component={UsernameScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Password" component={PasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PhoneVerification" component={PhoneVerificationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PhoneInput" component={PhoneInputScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    </ModalsProvider>
  );
};

export default App;

