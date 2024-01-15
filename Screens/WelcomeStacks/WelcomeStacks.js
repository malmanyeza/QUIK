import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BiometricScreen from './BiometricScreen';
import UsernameScreen from './UsernameScreen';
import PasswordScreen from './PasswordScreen';
import PhoneVerificationScreen from './PhoneVerificationScreen';
import PhoneInputScreen from './PhoneInputScreen';

const Stack = createStackNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="PhoneInput" component={PhoneInputScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Password" component={PasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Username" component={UsernameScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Biometric" component={BiometricScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
