import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import { useModalsContext } from '../../hooks/modalsContext';

const timeFrames = [
  '10:00 - 12:00',
  '10:30 - 12:30',
  '11:00 - 11:30',
  '11:30 - 12:30',
  '12:00 - 13:00',
  '12:30 - 13:30',
  '13:00 - 14:00',
  '13:30 - 14:30',
  '14:00 - 15:00',
  '14:30 - 15:30',
  '15:00 - 16:00',
  '15:30 - 16:30',
  '16:00 - 17:00',
];

const DeliveryTimeModal = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(timeFrames[0]);

  useEffect(()=>{
    setDeliveryTime(timeFrames[0])
    setReturnTime(timeFrames[0])
  },[])

  const { deliveryAndReturnTimeModalVisible, closeDeliveryAndReturnTimeModal, isReturnTimeSelected, isDeliveryTimeSelected, setDeliveryTime, setReturnTime } = useModalsContext();

  const handleTimeFramePress = (timeFrame) => {
    setSelectedTimeFrame(timeFrame);
    if(isDeliveryTimeSelected){
      setDeliveryTime(timeFrame);
    }else if(isReturnTimeSelected){
        setReturnTime(timeFrame);
    }
  };

  const renderTimeFrame = ({ item }) => (
    <View>
      <TouchableOpacity
        style={[
          styles.timeFrameItem,
          selectedTimeFrame === item && styles.selectedTimeFrame,
        ]}
        onPress={() => handleTimeFramePress(item)}
      >
        <Text style={[styles.timeFrameText, selectedTimeFrame === item && styles.selectedText]}>
          {item}
        </Text>
        <View style={[styles.circle, selectedTimeFrame === item && styles.selectedCircle]}>
          {selectedTimeFrame === item && <View style={styles.dot} />}
        </View>
      </TouchableOpacity>
      <View style={styles.border} />
    </View>
  );

  return (
    <Modal
      isVisible={deliveryAndReturnTimeModalVisible}
      onBackdropPress={() => closeDeliveryAndReturnTimeModal()}
      backdropOpacity={0.8}
      animationIn={'fadeIn'}
      animationOut="fadeOut"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{isDeliveryTimeSelected?'Delivery Time':isReturnTimeSelected?'Return Time':null}</Text>
            <TouchableOpacity onPress={() => closeDeliveryAndReturnTimeModal()} style={styles.closeButton}>
              <Icon name="close" size={25} color="black" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={timeFrames}
            renderItem={renderTimeFrame}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingTop: 20,
    height: '80%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20, // Increased font size
    fontWeight: 'bold',
    color: 'black',
  },
  closeButton: {},
  timeFrameItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20, // Increased padding
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    marginHorizontal: 20,
  },
  timeFrameText: {
    paddingHorizontal: 20,
    color: 'black',
    fontSize: 16, // Increased font size
  },
  selectedText: {
    color: 'red',
  },
  flatListContainer: {
    flexGrow: 1,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  selectedCircle: {
    backgroundColor: 'lightpink',
    borderColor: 'red',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  selectedTimeFrame: {
    backgroundColor: 'lightpink',
  },
});

export default DeliveryTimeModal;
