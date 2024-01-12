import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useModalsContext } from '../../hooks/modalsContext';

const DurationBox = () => {
  const [selectedTab, setSelectedTab] = useState('shortTerm');

    const { 
      openDeliveryAndReturnTimeModal, 
      setDeliveryTimeSelected, 
      setReturnTimeSelected, 
      returnTime, 
      deliveryTime,
      deliveryDate,
      returnDate,
      setDeliveryDateSelected,
      setReturnDateSelected,
      openDatePickerModal, 
    } = useModalsContext();

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };
  
  const openDeliveryDatePickerModal = () => {
    setDeliveryDateSelected(true);
    openDatePickerModal();
  }
  
  const openReturnDatePickerModal = () => {
    setReturnDateSelected(true);
    openDatePickerModal();
  }

  const openDeliveryTimeModal = () => {
    setDeliveryTimeSelected(true);
    openDeliveryAndReturnTimeModal();
  }

  const openReturnTimeModal = () => {
    setReturnTimeSelected(true);
    openDeliveryAndReturnTimeModal();
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'shortTerm' ? styles.selectedTab : styles.unselectedTab,
          ]}
          onPress={() => handleTabPress('shortTerm')}
        >
          <Text style={selectedTab === 'shortTerm' ? styles.selectedText : styles.unselectedText}>
            SHORT TERM
          </Text>
          <Text style={[styles.subText, { color: selectedTab === 'shortTerm' ? 'red' : 'white' }]}>
            DAYS AND WEEKS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'longTerm' ? styles.selectedTab : styles.unselectedTab,
          ]}
          onPress={() => handleTabPress('longTerm')}
        >
          <Text style={selectedTab === 'longTerm' ? styles.selectedText : styles.unselectedText}>
            LONG TERM
          </Text>
          <Text style={[styles.subText, { color: selectedTab === 'longTerm' ? 'red' : 'white' }]}>
            1 MONTH+
          </Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'longTerm' ? (
        <View style={styles.handoverContainer}>
          <Text style={styles.handoverText}>HANDOVER</Text>
          <TouchableOpacity style={styles.handoverButton} onPress={()=>openDeliveryDatePickerModal()}>
            <Text style={styles.dateText}>{returnDate}</Text>
            <MaterialCommunityIcons name="calendar" size={20} color="red" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.row}>
          <View style={[styles.column, { borderBottomLeftRadius: 20 }]}>
            <Text style={styles.topText}>FROM</Text>
            <TouchableOpacity style={styles.button} onPress={()=>openDeliveryDatePickerModal()} >
              <Text style={styles.dateText}>{deliveryDate}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> openDeliveryTimeModal() } >
              <Text style={styles.buttonText}>{deliveryTime}</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.column, { borderBottomRightRadius: 20 }]}>
            <Text style={styles.topText}>TO</Text>
            <TouchableOpacity style={styles.button} onPress={()=>openReturnDatePickerModal()} >
              <Text style={styles.dateText}>{returnDate}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={()=>openReturnTimeModal()} >{returnTime}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 25,
  },
  tabContainer: {
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  tabButton: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  selectedTab: {
    backgroundColor: 'white',
  },
  unselectedTab: {
    backgroundColor: '#FFAB91',
  },
  selectedText: {
    color: 'red',
  },
  unselectedText: {
    color: 'white',
  },
  subText: {
    fontSize: 12,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  topText: {
    fontSize: 12,
    marginBottom: 10,
    color: 'gray',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonText: {
    color: 'black',
  },
  dateText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  handoverContainer: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    paddingBottom: 20,
  },
  handoverText: {
    marginBottom: 5,
    fontSize: 12,
    color: 'gray',
    marginTop: 10,
  },
  handoverButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default DurationBox;
