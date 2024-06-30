import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View, Animated, StyleSheet } from 'react-native';
import { COLOR, FONT } from '../data/StyleGuides';

const useCustomToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const slideAnim = new Animated.Value(0); 

  const showToast = (msg) => {
    setMessage(msg);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000); 
  };

  const hideToast = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300, 
        useNativeDriver: true,
      }).start();
    } else {
      slideAnim.setValue(0);
    }
  }, [isVisible]);

  const ToastComponent = () => (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={hideToast}
    >
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.modalContent, { transform: [{ translateY: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [-300, 0], 
        }) }] }]}>
          <Text style={styles.message}>{message}</Text>
        </Animated.View>
      </View>
    </Modal>
  );

  return { showToast, ToastComponent };
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modalContent: {
    height: 50,
    width: '90%',
    backgroundColor: COLOR.black,
    alignSelf: "center",
    marginTop: "5%",
    alignItems: 'center',
    justifyContent: "center",
    borderRadius:2
  },
  message:{
    fontSize: 18, color: COLOR.White, fontFamily: FONT.DMSans_Regular
  }
});

export default useCustomToast;
