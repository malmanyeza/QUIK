import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,  } from 'react-native';
import Header from '../../Components/WecomePagesComponents/Header';
import Button from '../../Components/WecomePagesComponents/Button';
import { useNavigation } from '@react-navigation/native';
import CountryPicker from 'rn-country-picker';

const PhoneInputScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(''); // You may want to initialize this based on the user's location
  const [isButtonActivated, setIsButtonActivated] = useState(false);
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);
  const [countryCode, setCountryCode] = useState('263'); 


  const selectedValue = (value) => {
    setCountryCode(value);
    setIsCountryPickerVisible(false);
  };

  const navigation = useNavigation();

  const handleContinue = () => {
    // Handle continue logic here, e.g., send OTP to the phone number
    navigation.navigate('PhoneVerification');
  };

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
      <CountryPicker
				disable={false}
				animationType={"slide"}
				language="en"
        containerStyle={styles.pickerStyle}
				pickerTitleStyle={styles.pickerTitleStyle}
				selectedCountryTextStyle={styles.selectedCountryTextStyle}
				countryNameTextStyle={styles.countryNameTextStyle}
				searchBarPlaceHolder={"Search......"}
				hideCountryFlag={false}
				hideCountryCode={false}
				searchBarStyle={styles.searchBarStyle}
				countryCode={"971"}
				selectedValue={selectedValue}
			/>

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

      <Button activated={isButtonActivated} title="Continue" onPress={() =>handleContinue() } />

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
  pickerTitleStyle: {
    color: "#00ACC1",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 18
  },
  selectedCountryTextStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    color: "black",
    textAlign: "right"
  },
  countryNameTextStyle: {
    paddingLeft: 10,
    color: "black",
    textAlign: "right"
  },
  searchBarStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    color: "black",
  },
  pickerStyle: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FAFAFA"
  }

});

export default PhoneInputScreen;
