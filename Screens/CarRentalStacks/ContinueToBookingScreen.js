import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import MiniHeader from '../../Components/ContinueToBookingScreen/MiniHeader';
import Header from '../../Components/Header';
import CarView from '../../Components/ContinueToBookingScreen/CarView';
import CarFeaturesList from '../../Components/ContinueToBookingScreen/CarFeaturesList';
import WhatsIncluded from '../../Components/ContinueToBookingScreen/WhatsIncuded';
import Button from '../../Components/Button';
import RentalsHeader from '../../Components/ContinueToBookingScreen/Header';
import HeaderModal from '../../Components/ContinueToBookingScreen/HeaderModal';
import { useNavigation } from '@react-navigation/native';

const ContinueToBookingScreen = () => {
  const [isRounded, setIsRounded] = useState(true);

  const navigation = useNavigation();

  const goToBookCarScreen = () => {
    navigation.navigate('BookCar');
  }

  const handleScroll = (event) => {
    const scrollOffset = event.nativeEvent.contentOffset.y;
    // Adjust the threshold value based on your preference
    setIsRounded(scrollOffset <= 50);
  };


  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (
    <View style={styles.container}>
      <Header />
      <RentalsHeader onMenuPress={toggleModal} />
      <HeaderModal isVisible={isModalVisible} onClose={toggleModal} />
      <MiniHeader isRounded={isRounded} />
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <CarView />
      <CarFeaturesList />
      <WhatsIncluded />
    </ScrollView>
    <Button title="Continue to booking" activated={true} color={'red'} onPress={goToBookCarScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom:50
  },
  content: {
    // Add styling for your other UI components
  },
});

export default ContinueToBookingScreen;
