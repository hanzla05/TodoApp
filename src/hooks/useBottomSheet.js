import { useState, useRef } from 'react';

const useBottomSheet = () => {
  const bottomSheetRef = useRef(null);
  const [selectedPriority, setSelectedPriority] = useState('Normal');

  const handleOpenSheet = () => {
    bottomSheetRef.current.open();
  };

  const handleCloseSheet = () => {
    bottomSheetRef.current.close();
  };

  const handlePriorityPress = (priority) => {
    setSelectedPriority(priority);
  };

  return {
    bottomSheetRef,
    selectedPriority,
    handleOpenSheet,
    handleCloseSheet,
    handlePriorityPress,
  };
};

export default useBottomSheet;
