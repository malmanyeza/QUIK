import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

const HeaderModal = ({ isVisible, onClose }) => {
  return (
    <Modal 
        isVisible={isVisible} 
        onBackdropPress={onClose} 
        style={styles.modal}
        animationIn={'slideInDown'}
        animationOut={'slideOutUp'}
    >
      <View style={styles.modalContent}>
        <View style={styles.userContainer}>
          <View style={styles.userIconContainer}>
            <Icon name="person" size={30} color="gray"  />
          </View>
          <Text style={styles.userName}>John Doe</Text>
          <TouchableOpacity style={styles.chevron} onPress={onClose}>
            <Icon name="close" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        {renderMenuItem('search', 'See cars')}
        {renderMenuItem('directions-car', 'My rentals')}
        {renderMenuItem('help-outline', 'Support')}
      </View>
    </Modal>
  );
};

const renderMenuItem = (iconName, text) => (
  <View style={styles.menuItem}>
    <Icon name={iconName} size={30} color="black" />
    <Text style={styles.menuText}>{text}</Text>
    <TouchableOpacity style={styles.chevron} >
      <Icon name="chevron-right" size={30} color="black" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-start',
    
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userName: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,

  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  chevron: {
    flex: 1,
    alignItems: 'flex-end',
  },
  userIconContainer:{
    backgroundColor: '#ddd',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HeaderModal;
