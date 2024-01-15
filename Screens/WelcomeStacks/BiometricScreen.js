import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BiometricButton from '../../Components/WecomePagesComponents/BiometricButton';
import Header from '../../Components/WecomePagesComponents/Header';

const BiometricScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headerText}>Enable secure login</Text>
      <Text style={styles.blackText}>
        Secure login provides increased security and faster login experience.
      </Text>
    
      <View style={styles.biometricContainer}>
        <BiometricButton activated={true} title="Enable secure login" onPress={() => console.log('Enable Pressed!')} />
        <BiometricButton activated={false} title="I'll do this later" onPress={() => console.log('Later Pressed!')} />

        <Text style={styles.blackText}>
            Once this is set up, you'll need to use your device's biometric to access your QUIK account and for other sensitive actions.
        </Text>
      </View>
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
    marginBottom: 10,
    color: 'black',
  },
  blackText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
    biometricContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
});

export default BiometricScreen;
