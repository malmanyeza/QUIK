import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, Dimensions, TouchableOpacity, StatusBar, TextInput, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from './SearchBar';

const { height } = Dimensions.get('screen');

const DestinationPullup = () => {
  const translateY = useRef(new Animated.Value(0)).current;
  const [panResponder] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -100) {
          Animated.timing(translateY, {
            toValue: -height + 200,
            duration: 300,
            useNativeDriver: false,
          }).start();
        } else if(gestureState.dy < 100){
          Animated.timing(translateY, {
            toValue: -height + 200,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }
        else {
          Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  );

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        // Animate the view to its original position when the keyboard appears
        Animated.timing(translateY, {
          toValue: -height + 500,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // Handle the keyboard hide event if needed
      }
    );

    return () => {
      // Cleanup the listeners when the component unmounts
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [translateY]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
        },
      ]}
      {...panResponder.panHandlers}
    >
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <View style={styles.handle} />
      <Text style={styles.header}>Where to?</Text>
      <SearchBar />
      <Text style={styles.content}>Your content goes here</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    position: 'absolute',
    bottom: -(height - 150),
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: 'lightgray',
    alignSelf: 'center',
    borderRadius: 3,
    marginTop: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBarText: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  skipButton: {
    marginLeft: 10,
  },
  skipButtonText: {
    color: 'gray',
  },
  content: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default DestinationPullup;
