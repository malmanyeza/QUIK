import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../../Components/WecomePagesComponents/Button';
import Header from '../../Components/WecomePagesComponents/Header';
import { useNavigation } from '@react-navigation/native';

const UsernameScreen = () => {
  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  const handleSubmission = () => { 
    // Handle submission logic here, e.g., send username to the server
    navigation.navigate('Password');
  };

  const isUsernameEntered = (name) => {
    // Add your logic to check if the username is entered
    return name.trim() !== '';
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headerText}>What's your name?</Text>
      <Text style={styles.descriptionText}>Your name helps Drivers to confirm who they are picking up</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Enter your full name"
        placeholderTextColor="gray"
        onChangeText={(text) => setUsername(text)}
      />

      <View style={styles.termsContainer}>
        <Text style={styles.grayText}>By creating QUIK account you agree with QUIK's</Text>
        <TouchableOpacity>
          <Text style={styles.greenText}>Terms & Conditions . Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      <Button activated={isUsernameEntered(username)} title="Submit" onPress={() => handleSubmission()}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,// Center content vertically
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  descriptionText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 50,
    fontSize: 16,
    marginBottom: 20,
    color: 'gray',
  },
  termsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 100, // Optional margin for spacing
  },
  grayText: {
    color: 'gray',
  },
  greenText: {
    color: '#65B741',
  },
});

export default UsernameScreen;
