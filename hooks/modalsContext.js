import React, { createContext, useContext, useState } from 'react';

// Create the context
const ModalsContext = createContext();

// Create a provider component to wrap your app with
export const ModalsProvider = ({ children }) => {
  const [deliveryAndReturnTimeModalVisible, setDeliveryAndReturnTimeModalVisible] = useState(false);
  const [isDeliveryTimeSelected, setDeliveryTimeSelected] = useState(false);
  const [isReturnTimeSelected, setReturnTimeSelected] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState('10:00 - 12:00');
  const [returnTime, setReturnTime] = useState('10:00 - 12:00');

  const intitialDate = new Date();

  const [datePickerModalVisible, setDatePickerModalVisible] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState(intitialDate.toDateString().slice(0, -4));
  const [returnDate, setReturnDate] = useState(intitialDate.toDateString().slice(0, -4));
  const [isDeliveryDateSelected, setDeliveryDateSelected] = useState(false);
  const [isReturnDateSelected, setReturnDateSelected] = useState(false);


  const openDeliveryAndReturnTimeModal = () => {
    setDeliveryAndReturnTimeModalVisible(true);
  };

  const closeDeliveryAndReturnTimeModal = () => {
    setDeliveryAndReturnTimeModalVisible(false);
    setReturnTimeSelected(false);
    setDeliveryTimeSelected(false);
  };

  const openDatePickerModal = () => {
    setDatePickerModalVisible(true);
  }

  const closeDatePickerModal = () => {
    setDatePickerModalVisible(false);
    setDeliveryDateSelected(false);
    setReturnDateSelected(false);
  }

  

  // Define the values that will be accessible through the context
  const contextValues = {
    deliveryAndReturnTimeModalVisible,
    openDeliveryAndReturnTimeModal,
    closeDeliveryAndReturnTimeModal,
    isDeliveryTimeSelected,
    setDeliveryTimeSelected,
    isReturnTimeSelected,
    setReturnTimeSelected,
    deliveryTime,
    setDeliveryTime,
    returnTime,
    setReturnTime,
    datePickerModalVisible,
    openDatePickerModal,
    closeDatePickerModal,
    deliveryDate,
    returnDate,
    isDeliveryDateSelected,
    setDeliveryDateSelected,
    isReturnDateSelected,
    setReturnDateSelected,
    setReturnDate,
    setDeliveryDate

  };

  // Provide the context values to the components
  return (
    <ModalsContext.Provider value={contextValues}>
      {children}
    </ModalsContext.Provider>
  );
};

// Create a custom hook to use the context
export const useModalsContext = () => {
  return useContext(ModalsContext);
};
