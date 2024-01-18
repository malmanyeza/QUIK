import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const DestinationPullup = () => {
  const translateY = useSharedValue(-100); // Initial translateY to hide most of the drawer
  const drawerHeight = 300; // Change this to your desired drawer height
  const threshold = -50; // Threshold to start revealing the content

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, { dy }) => {
        translateY.value = Math.max(-drawerHeight, Math.min(0, translateY.value + dy));
      },
      onPanResponderRelease: (_, { vy }) => {
        if (vy > 0) {
          // If velocity is positive, user is swiping down
          translateY.value = withSpring(-drawerHeight);
        } else {
          // If velocity is negative, user is swiping up
          translateY.value = withSpring(0);
        }
      },
    })
  ).current;

  const drawerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.drawer, drawerStyle]}
    >
      <View style={styles.drawerContent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Where to?</Text>
        </View>
        {/* Other content of the drawer */}
        <View style={styles.searchBar}>
          {/* Your search bar component */}
        </View>
        <View style={styles.otherContent}>
          {/* Other content components */}
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  drawerContent: {
    padding: 16,
    paddingBottom: 0,
  },
  header: {
    height: 40,
    alignItems: 'center',
    
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    marginVertical: 16,
    // Your search bar styles
  },
  otherContent: {
    // Styles for other content
  },
});

export default DestinationPullup;
