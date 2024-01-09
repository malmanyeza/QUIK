import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MotorCard from './MotorCard'; // Import the MotorCard component
import DurationBox from './DurationBox';

const MotorCardsList = () => {


    const data = [
        {
          id: 1,
          title: 'Toyota Camry',
          rate: '150 AED',
          total: '300 AED',
          image: require('../../assets/images/sedan_7240765cf3.png'),
          features: ['Automatic', 'SUV', '5 seats', '1.6 L'],
        },
        {
          id: 2,
          title: 'Honda Accord',
          rate: '180 AED',
          total: '360 AED',
          image: require('../../assets/images/sedan_7240765cf3.png'),
          features: ['Manual', 'Sedan', '4 seats', '2.0 L'],
        },
        {
          id: 3,
          title: 'Nissan Altima',
          rate: '160 AED',
          total: '320 AED',
          image: require('../../assets/images/sedan_7240765cf3.png'),
          features: ['Automatic', 'SUV', '5 seats', '1.8 L'],
        },
        {
          id: 4,
          title: 'Ford Fusion',
          rate: '170 AED',
          total: '340 AED',
          image: require('../../assets/images/sedan_7240765cf3.png'),
          features: ['Automatic', 'Sedan', '4 seats', '1.5 L'],
        },
        {
          id: 5,
          title: 'Chevrolet Malibu',
          rate: '200 AED',
          total: '400 AED',
          image: require('../../assets/images/sedan_7240765cf3.png'),
          features: ['Manual', 'SUV', '7 seats', '2.2 L'],
        },
        {
          id: 6,
          title: 'Hyundai Sonata',
          rate: '190 AED',
          total: '380 AED',
          image: require('../../assets/images/sedan_7240765cf3.png'),
          features: ['Automatic', 'Sedan', '5 seats', '2.5 L'],
        },
        {
          id: 7,
          title: 'Kia Optima',
          rate: '220 AED',
          total: '440 AED',
          image: require('../../assets/images/sedan_7240765cf3.png'),
          features: ['Manual', 'SUV', '7 seats', '2.0 L'],
        },
        {
          id: 8,
          title: 'Mercedes-Benz C-Class',
          rate: '240 AED',
          total: '480 AED',
          image: require('../../assets/images/sedan_7240765cf3.png'),
          features: ['Automatic', 'Sedan', '5 seats', '3.0 L'],
        },
        {
          id: 9,
          title: 'BMW 3 Series',
          rate: '250 AED',
          total: '500 AED',
          image: require('../../assets/images/sedan_7240765cf3.png'),
          features: ['Manual', 'Sedan', '4 seats', '1.8 L'],
        },
        {
          id: 10,
          title: 'Audi A4',
          rate: '210 AED',
          total: '420 AED',
          image: require('../../assets/images/sedan_7240765cf3.png'),
          features: ['Automatic', 'SUV', '5 seats', '2.0 L'],
        },
      ];
      


  const renderMotorCard = ({ item }) => (
    <MotorCard
      title={item.title}
      rate={item.rate}
      total={item.total}
      image={item.image}
      features={item.features}
    />
  );

  return (
    <FlatList
      ListHeaderComponent={() => <DurationBox />}
      data={data}
      renderItem={renderMotorCard}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
});

export default MotorCardsList;
