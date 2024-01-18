import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { LogBox, StatusBar } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import CountriesScreen from './Screens/CountriesScreen';
import { ModalsProvider } from './hooks/modalsContext';
import CarRentalStack from './Screens/CarRentalStacks/CarRentalStack';
import WelcomeStack from './Screens/WelcomeStacks/WelcomeStacks';
import DestinationScreen from './Screens/RidesStacks/DestinationScreen';

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
          <Stack.Screen name="Destination" component={DestinationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Welcome" component={WelcomeStack} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="CarRental" component={CarRentalStack} options={{ headerShown: false }} />
          <Stack.Screen name="Countries" component={CountriesScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    </ModalsProvider>
  );
};

export default App;

