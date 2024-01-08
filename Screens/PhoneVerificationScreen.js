import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Header from '../Components/WecomePagesComponents/Header';

const PhoneVerificationScreen = () => {
  const [focusStates, setFocusStates] = useState([true, false, false, false]);
  const verificationCodeRefs = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ];

  const userMobileNumber = '+263 785 490 409';

  const handleVerificationCodeChange = (text, index) => {
    if (text !== '') {
      if (index < 3) {
        verificationCodeRefs[index + 1].current.focus();
      }
    } else {
      if (index > 0) {
        verificationCodeRefs[index - 1].current.focus();
      }
    }
  };

  const handleFocusChange = (index) => {
    const newFocusStates = focusStates.map((state, i) => i === index);
    setFocusStates(newFocusStates);
  };

  return (
    <View style={styles.container}>
        <Header />
      <Text style={styles.heading}>Verify your mobile number</Text>
      <Text style={styles.smallText}>
        You will receive an SMS with a verification pin on {userMobileNumber}
      </Text>

      <View style={styles.inputContainer}>
        {[0, 1, 2, 3].map((index) => (
          <TextInput
            key={index}
            ref={verificationCodeRefs[index]}
            style={[
              styles.input,
              { borderBottomColor: focusStates[index] ? 'black' : 'gray' },
            ]}
            onChangeText={(text) => handleVerificationCodeChange(text, index)}
            onFocus={() => handleFocusChange(index)}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
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
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomWidth: 2,
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    marginRight:5
  },
});

export default PhoneVerificationScreen;
