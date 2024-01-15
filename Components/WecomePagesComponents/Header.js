import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {

const navigation = useNavigation();

const goBack = () => {
  navigation.goBack();
}


  return (
    <View style={styles.headerContainer}>
      {/* Left Arrow Icon */}
      <TouchableOpacity style={styles.iconContainer} onPress={()=>goBack()}  >
        <View style={styles.circle}>
          <Feather name="arrow-left" size={24} color="black" />
        </View>
      </TouchableOpacity>

      {/* Customer Service Icon */}
      <TouchableOpacity style={styles.iconContainer}>
        <View style={styles.circle}>
        <MaterialCommunityIcons name="headset" size={20} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    marginBottom: 20,// Customize the header background color
  },
  iconContainer: {
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20, // Customize the circle background color
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#8CA1A5',
    borderWidth:1
  },
});

export default Header;
