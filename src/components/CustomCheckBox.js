import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLOR } from '../data/StyleGuides';
import { Tick } from '../data/Images';

const CustomCheckbox = ({ isChecked, onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.checkboxContainer, isChecked && styles.checked]}>
        {isChecked && <View style={styles.checkboxInner} >
          <Image style={styles.tick} source={Tick}/>
          </View>}

        
      </TouchableOpacity>
    );
  };

  export default CustomCheckbox


  const styles = StyleSheet.create({
    checkboxContainer: {
      width: 24,
      height: 24,
      borderRadius: 20,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      borderColor: COLOR.grey,
    },
    checkboxInner: {
      width: 16,
      height: 16,
      backgroundColor: COLOR.primary,
      borderRadius: 20,
      alignItems:'center',
      justifyContent:'center'
    },
    checked: {
      backgroundColor: COLOR.primary,
      borderWidth:0
    },tick:{
      height:20,width:20
    }
  });