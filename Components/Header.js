import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon library
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);
    const [isPayPressed, setPayPressed] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlePayPress = () => {
    setPayPressed(true);
    // Add your Pay button press logic here
  }

  return (
    <View style={styles.headerContainer}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        {isPayPressed ? (
        <TouchableOpacity
          style={[styles.button, { borderRadius: 25, borderColor: '#8CA1A5', borderWidth: 1, backgroundColor: 'white', width: 45, height: 45 }]}
        >
          <MaterialCommunityIcons name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.button, { width: 45, height: 45 }]}
          onPress={handlePayPress}
        >
          <Text style={styles.payButton}>Pay</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.headerTitle}>QUIK</Text>

      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Icon name="bars" size={20} color="white" />
      </TouchableOpacity>

      <Modal 
      isVisible={isModalVisible} 
      style={styles.modal} 
      animationIn={'slideInDown'}
      animationOut={'slideOutUp'}
      onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
           <MaterialCommunityIcons name="close" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>QUIK</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.menuButton}>
              <View style={styles.circle}>
                <Icon name="home" size={20} color="black" />
              </View>
              <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButton}>
              <View style={styles.circle}>
                <MaterialCommunityIcons name="headset" size={20} color="black" />
              </View>
              <Text style={styles.buttonText}>Help</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButton}>
              <View style={styles.circle}>
                <Icon name="list" size={20} color="black" />
              </View>
              <Text style={styles.buttonText}>Activities</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButton}>
              <View style={styles.circle}>
                <Icon name="user" size={20} color="black" />
              </View>
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  payButton: {
    color: 'white'
  },
  button: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'black',
    padding: 10,
  },
  buttonText: {
    color: 'black',
  },
  headerTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  modal: {
    justifyContent: 'flex-start',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  closeButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#8CA1A5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginTop:30,
  },
  menuButton: {
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#8CA1A5',
    padding: 10,
    marginBottom: 5,
    width:50,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
