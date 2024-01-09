import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const ModalButton = ({ activated, title, onPress }) => {
  const buttonBackgroundColor = activated ? '#65B741' : '#DDE6ED';
  const buttonTextColor = activated ? 'white' : '#8CA1A5';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, { color: buttonTextColor }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  button: {
    borderColor:'lightgray',
    borderWidth:1,
    backgroundColor: '',
    height: 50,
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ModalButton;
