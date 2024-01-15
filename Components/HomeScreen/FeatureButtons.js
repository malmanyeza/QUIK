import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const FeatureButtons = () => {
  const [showMore, setShowMore] = useState(false);

  const navigation = useNavigation();

  const handleFeature1Press = (index) => {
    console.log(`Feature ${index + 1} pressed`);
    // Add your feature-specific logic here

  };

  const featureData = [
    {
      id: 1,
      title: 'Rides',
      image: require('../../assets/images/sedan_7240765cf3.png'),
      onPress: () => handleFeature1Press(0),
    },
    {
      id: 2,
      title: 'Car rental',
      image: require('../../assets/images/taxi_car_3113f165e9.png'),
      onPress: () => navigation.navigate('CarRental'),
    },
    {
      id: 3,
      title: 'Send Money',
      image: require('../../assets/images/send_money.png'),
      onPress: () => handleFeature1Press(2),
    },
    {
      id: 4,
      title: 'Global transfers',
      image: require('../../assets/images/groceries.jpg'),
      onPress: () => handleFeature1Press(3),
    },
    {
      id: 5,
      title: 'Bills and recharges',
      image: require('../../assets/images/Bills.png'),
      onPress: () => handleFeature1Press(4),
    },
    {
      id: 6,
      title: 'City to city',
      image: require('../../assets/images/groceries.jpg'),
      onPress: () => handleFeature1Press(5),
    },
    {
      id: 7,
      title: 'Home cleaning',
      image: require('../../assets/images/house_cleaning.jpg'),
      onPress: () => handleFeature1Press(6),
    },
    {
      id: 8,
      title: 'Delivery',
      image: require('../../assets/images/Delivery.webp'),
      onPress: () => handleFeature1Press(7),
    },
    {
      id: 9,
      title: 'Bike',
      image: require('../../assets/images/bike.jpg'),
      onPress: () => handleFeature1Press(8),
    },
    {
      id: 10,
      title: 'Laundry',
      image: require('../../assets/images/laundry.jpeg'),
      onPress: () => handleFeature1Press(9),
    },
    {
      id: 11,
      title: 'Tickets and passes',
      image: require('../../assets/images/tickets.jpg'),
      onPress: () => handleFeature1Press(10),
    },
    {
      id: 12,
      title: 'Request money',
      image: require('../../assets/images/request_money.png'),
      onPress: () => handleFeature1Press(11),
    },
    {
      id: 13,
      title: 'Feature 13',
      image: require('../../assets/images/groceries.jpg'),
      onPress: () => handleFeature1Press(12),
    },
  ];


  const renderItem = ({ item, index }) => {
    const isShowMoreButton = item.title === 'Show More';
    const isThirdRow = index >= 8 && index < 12 && !showMore;
    
    return (
      <TouchableOpacity
        style={[styles.buttonContainer, isThirdRow && !isShowMoreButton ? styles.lowerOpacity: null]}
        onPress={item.onPress}
        activeOpacity={0.7}
      >
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} resizeMode='contain'/>
        </View>
        <Text style={styles.buttonText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item) => item.id.toString();

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const renderShowMoreButton = () => {
    if (featureData.length > 8) {
      return (
        <TouchableOpacity style={[styles.showMoreButton,{bottom:!showMore? 30:null, position:!showMore?'absolute':null}]} onPress={toggleShowMore}>
            <Ionicons name={showMore ? 'chevron-up' : 'chevron-down'} size={18} style={styles.chevron} />
          <Text style={[styles.showMoreButtonText]}>{showMore ? 'Show Less' : 'Show More'}</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={showMore ? featureData : featureData.slice(0, 12)}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={4}
        contentContainerStyle={styles.flatListContainer}
      />
      {renderShowMoreButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  flatListContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
    justifyContent:'center'
  },
  lowerOpacity: {
    opacity: 0.2,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 5,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    maxWidth: 80,
    fontSize: 13,
  },
  showMoreButton: {
    backgroundColor:'white',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderColor: '#8CA1A5',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 25,
    paddingVertical: 10,
  },
  showMoreButtonText: {
    color: 'black',
    marginRight: 5,
    marginLeft: 5,
  },
  chevron: {
    color: 'black',
  },
});

export default FeatureButtons;
