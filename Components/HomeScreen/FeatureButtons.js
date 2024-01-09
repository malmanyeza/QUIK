import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FeatureButtons = () => {
  const [showMore, setShowMore] = useState(false);

  const handleFeature1Press = (index) => {
    console.log(`Feature ${index + 1} pressed`);
    // Add your feature-specific logic here

  };

  const featureData = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `Feature ${index + 1}`,
    image: require('../../assets/images/groceries.jpg'),
    onPress: () => handleFeature1Press(index),
  }));

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
          <Image source={item.image} style={styles.image} />
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
  },
  lowerOpacity: {
    opacity: 0.2,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 40,
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
