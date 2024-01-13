import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const CarView = () => {
    const carData = {
        name: 'Mitsubishi Attrage',
        images: [
          require('../../assets/images/sedan_7240765cf3.png'),
          require('../../assets/images/sedan_7240765cf3.png'),
          require('../../assets/images/sedan_7240765cf3.png'),
        ],
        rate: '110 AED',
        total: '110 AED total',
      };

  const { name, images, rate, total } = carData;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>

      <Swiper style={styles.swiperContainer} showsPagination={true} loop={false}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={image} style={styles.image} resizeMode="contain" />
          </View>
        ))}
      </Swiper>

      <Text style={styles.rate}>
        {rate} <Text style={styles.smallText}>/ day</Text>
      </Text>

      <Text style={styles.total}>
        {total} <Text style={styles.smallText}>total</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    borderRadius: 8,
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  swiperContainer: {
    marginBottom: 16,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  rate: {
    marginTop: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  total: {
    paddingHorizontal: 20,
    fontSize: 14,
    color: 'black',
  },
  smallText: {
    fontWeight: 'normal',
    fontSize: 12,
  },
});

export default CarView;
