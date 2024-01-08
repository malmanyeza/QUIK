import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,  } from 'react-native';
import Header from '../Components/WecomePagesComponents/Header';
import Button from '../Components/WecomePagesComponents/Button';

const PhoneInputScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(''); // You may want to initialize this based on the user's location
  const [isButtonActivated, setIsButtonActivated] = useState(false);

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
    setIsButtonActivated(text.length > 0); // Activate the button only if there's a mobile number
  };

  const handleCountryChange = (country) => {
    // Handle country change logic, e.g., update selectedCountry state
    setSelectedCountry(country);
  };

  const handleRemoveInput = () => {
    setPhoneNumber('');
    setIsButtonActivated(false);
  };

  const renderCountryItem = (country) => {
    
    return (
      <View style={styles.pickerItem} key={country.label}>
        
        <Text>{country.label}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
        <Header />
      <Text style={styles.headerText}>Enter your phone number</Text>
      <Text style={styles.smallText}>Enter your phone number to create an account or log in</Text>

      <View style={styles.inputContainer}>
        <View style={styles.countryPickerContainer}>
          
        </View>

        <TextInput
          style={styles.textInput}
          placeholder="Mobile number"
          onChangeText={handlePhoneNumberChange}
          value={phoneNumber}
          keyboardType="phone-pad"
          placeholderTextColor={'gray'}
        />

        {phoneNumber.length > 0 && (
          <TouchableOpacity onPress={handleRemoveInput} style={styles.removeButton}>
            <Text style={styles.removeButtonText}>X</Text>
          </TouchableOpacity>
        )}
      </View>

      <Button activated={isButtonActivated} title="Continue" onPress={() => console.log('Submit Pressed!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#FAFAFA",
    flex: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  smallText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color: 'black',
  },
  countryPickerContainer: {
    marginRight: 10,
  },
  countryPicker: {
    height: 50,
    width: 150, // Adjust the width as needed
  },
  pickerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryImage: {
    width: 20, // Adjust the width as needed
    height: 20, // Adjust the height as needed
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: 'gray'
  },
  removeButton: {
    marginLeft: 10,
    padding: 10,
  },
  removeButtonText: {
    color: 'red',
    fontSize: 18,
    color: 'gray'
  },
});

export default PhoneInputScreen;
