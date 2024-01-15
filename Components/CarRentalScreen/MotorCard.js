import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MotorCard = ({ title, rate, total, image, features}) => {

const navigation = useNavigation()

const goToContinueBooking = () => {
  navigation.navigate('ContinueToBooking');
};

  return (
    <TouchableOpacity style={styles.container} onPress={goToContinueBooking}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View>
        <View style={styles.rateContainer}>
          <Text style={styles.rateTextBold}>{rate}</Text>
          <Text style={styles.rateText}> /day</Text>
        </View>
        <Text style={styles.totalText}>Total {total}</Text>
        </View>
      </View>

      <Image source={image} style={styles.image} />

      <View style={styles.footer}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureContainer}>
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  header: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateTextBold: {
    color: 'red',
    fontWeight: 'bold',
  },
  rateText: {
    color: 'red',
  },
  totalText: {
    color: 'gray',
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor:'white'
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
  },
  featureContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 15,
  },
  featureText: {
    color: 'gray',
  },
});

export default MotorCard;
