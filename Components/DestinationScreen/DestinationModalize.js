import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const DestinationPullup = () => {
  const translateY = useSharedValue(0);
  const drawerHeight = 300; // Change this to your desired drawer height

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, { dy }) => {
        translateY.value = dy;
      },
      onPanResponderRelease: (_, { vy }) => {
        if (vy > 0) {
          // If velocity is positive, user is swiping down
          translateY.value = withSpring(0);
        } else {
          // If velocity is negative, user is swiping up
          translateY.value = withSpring(-drawerHeight);
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
    <View style={styles.container}>
      {/* Main content goes here */}
      <View style={styles.mainContent}>
        {/* Your main content components */}
      </View>

      {/* Bottom Drawer */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.drawer, drawerStyle]}
      >
        {/* Drawer content goes here */}
        <View style={styles.drawerContent}>
          <View style={styles.handle} />
          {/* Your drawer content components */}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  drawer: {
    position: 'absolute',
  
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  drawerContent: {
    padding: 16,
  },
  handle: {
    height: 5,
    width: 40,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 8,
  },
});

export default DestinationPullup;
