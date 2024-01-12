import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import MiniHeader from '../Components/ContinueToBookingScreen/MiniHeader';
import Header from '../Components/Header';
import CarView from '../Components/ContinueToBookingScreen/CarView';
import CarFeaturesList from '../Components/ContinueToBookingScreen/CarFeaturesList';
import WhatsIncluded from '../Components/ContinueToBookingScreen/WhatsIncuded';
import Button from '../Components/Button';

const ContinueToBookingScreen = () => {
  const [isRounded, setIsRounded] = useState(true);

  const handleScroll = (event) => {
    const scrollOffset = event.nativeEvent.contentOffset.y;
    // Adjust the threshold value based on your preference
    setIsRounded(scrollOffset <= 50);
  };

  return (
    <View style={styles.container}>
      <Header />
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
    <Button title="Continue to booking" activated={true} color={'red'}/>
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
  },
  content: {
    // Add styling for your other UI components
  },
});

export default ContinueToBookingScreen;
