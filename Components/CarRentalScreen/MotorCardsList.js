import React, { useState, useRef } from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MotorCard from './MotorCard'; // Import the MotorCard component
import DurationBox from './DurationBox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useModalsContext } from '../../hooks/modalsContext';
import LinearGradient from 'react-native-linear-gradient';
import { Line } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const MotorCardsList = () => {
  const [showMiniHeader, setShowMiniHeader] = useState(false);
  const flatListRef = useRef(null);

  const navigation = useNavigation();

  const goToContinueBooking = () => {
    navigation.navigate('ContinueToBooking');
  };

  const { returnDate, deliveryDate, deliveryTime, returnTime } = useModalsContext();

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

  const MiniHeader = () => {
    const handleMiniHeaderPress = () => {
      // Scroll to the top when MiniHeader is pressed
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    };

    return (
      <TouchableOpacity style={styles.miniHeader} activeOpacity={1}>
        <Icon name="calendar" size={30} color="black" />
        <View style={styles.deliferyInfo}>
          <Text style={styles.dateText}>{deliveryDate}</Text>
          <Text style={styles.deliveryInfoText}>{deliveryTime}</Text>
        </View>
        <Text>-</Text>
        <View style={styles.deliferyInfo}>
          <Text style={styles.dateText}>{returnDate}</Text>
          <Text style={styles.deliveryInfoText}>{returnTime}</Text>
        </View>
        <Icon name="pencil" size={30} color="#F44336" />
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient colors={['#FF8A80', '#FF5252']} style={styles.gradientContainer}>
    <View>
      <FlatList
        ref={flatListRef}
        ListHeaderComponent={() => <DurationBox />}
        data={data}
        renderItem={renderMotorCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        onScroll={(event) => {
          const scrollOffset = event.nativeEvent.contentOffset.y;
          // Adjust the threshold value based on your preference
          setShowMiniHeader(scrollOffset > 50);
        }}
      />
      {showMiniHeader && <MiniHeader />}
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  gradientContainer: {
    height: '150%',
  },
  miniHeader: {
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  deliferyInfo: {
    alignItems: 'center',
  },
  deliveryInfoText: {
    fontSize: 12,
    color: 'gray',
  },
  dateText: {
    marginBottom: 5,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MotorCardsList;
