import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../../Components/WecomePagesComponents/Button';
import Header from '../../Components/WecomePagesComponents/Header';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const PasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('Home'); 
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isStrongPassword = (password) => {
    // Add your password strength logic here
    return password.length >= 8;
  };

  return (
    <View style={styles.container}>
        <Header />
      <Text style={styles.headerText}>Create a strong password</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={'gray'}
        />

        <TouchableOpacity onPress={handleTogglePasswordVisibility} style={styles.eyeIconContainer}>
          <Feather name={showPassword ? 'eye' : 'eye-off'} size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.messageBox}>
        <Text style={styles.messageText}>
          Use at least 8 characters to create a password. Try to make it a little difficult.
        </Text>
      </View>

      <Button activated={isStrongPassword(password)} title="Continue" onPress={() => handleContinue()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: 'gray',
  },
  eyeIconContainer: {
    padding: 10,
  },
  messageBox: {
    backgroundColor: '#DDE6ED',
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
  },
  messageText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default PasswordScreen;
