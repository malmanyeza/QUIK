import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const Button = ({ activated, title, onPress, color }) => {
  const buttonBackgroundColor = activated ? color: '#DDE6ED';
  const buttonTextColor = activated ? 'white' : '#8CA1A5';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonBackgroundColor , borderWidth:activated?0:1}]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, { color: buttonTextColor }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 10,
    paddingHorizontal:10,
  },
  button: {
    borderColor:'lightgray',
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

export default Button;
