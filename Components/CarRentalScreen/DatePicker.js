import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import { useModalsContext } from '../../hooks/modalsContext';

const Datepicker = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());



  const {
    setReturnDate,
    setDeliveryDate,
    isReturnDateSelected,
    isDeliveryDateSelected,
    datePickerModalVisible,
    closeDatePickerModal,
  } = useModalsContext();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleConfirm = () => {
    console.log(selectedDate.toUTCString().slice(0, -18));
    if (isReturnDateSelected) {
      setReturnDate(selectedDate.toUTCString().slice(0, -18));
    } else if (isDeliveryDateSelected) {
      setDeliveryDate(selectedDate.toUTCString().slice(0, -18));
    }

    onClose();
  };

  const onClose = () => {// Reset selected date
    closeDatePickerModal();
  };

  return (
    <Modal
      backdropOpacity={0.5}
      animationType="slide"
      isVisible={datePickerModalVisible}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <DatePicker date={selectedDate} onDateChange={handleDateChange} textColor="black" mode="date" />
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton} onPress={onClose}>
            <Text style={styles.confirmButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  confirmButton: {
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Datepicker;
