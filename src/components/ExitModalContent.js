import { View, Text, TouchableOpacity, BackHandler, Modal, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLOR, FONT } from '../data/StyleGuides';

const ExitModalContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const backAction = () => {
      setIsVisible(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  const handleExit = () => {
    BackHandler.exitApp();
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(false);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Are you sure you want to exit?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleExit}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: COLOR.transparent,
  },
  modalContent: {
    backgroundColor: 'white',
    height: 160,
    width: '90%',
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    color: COLOR.black,
    fontFamily: FONT.DMSans_Bold,
    alignSelf: 'center',
    marginTop: '10%',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: '10%',
    alignSelf: 'center',
  },
  button: {
    height: 50,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor:COLOR.primary
  },
  buttonText: {
    fontSize: 18,
    color: COLOR.White,
    fontFamily: FONT.DMSans_Medium,
  },
  cancelButton: {
    backgroundColor: COLOR.grey,
    marginLeft: '5%',
  },
});

export default ExitModalContent;
