import React, { createContext, useContext, useState } from 'react';

// Create the context
const ModalsContext = createContext();

// Create a provider component to wrap your app with
export const ModalsProvider = ({ children }) => {
  const [deliveryAndReturnTimeModalVisible, setDeliveryAndReturnTimeModalVisible] = useState(false);
  const [isDeliveryTimeSelected, setDeliveryTimeSelected] = useState(false);
  const [isReturnTimeSelected, setReturnTimeSelected] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState('');
  const [returnTime, setReturnTime] = useState('');

  const openDeliveryAndReturnTimeModal = () => {
    setDeliveryAndReturnTimeModalVisible(true);
  };

  const closeDeliveryAndReturnTimeModal = () => {
    setDeliveryAndReturnTimeModalVisible(false);
    setReturnTimeSelected(false);
    setDeliveryTimeSelected(false);
  };

  

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
