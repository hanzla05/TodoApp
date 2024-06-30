import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { COLOR, FONT } from '../data/StyleGuides';
import { Plus } from '../data/Images';

export default function HomeHeader({ onPlusPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TouchableOpacity onPress={onPlusPress}>
        <Image style={styles.plusIcon} source={Plus} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    height:100,width:'100%',
    backgroundColor:COLOR.primary
  },
  title: {
    fontSize: 35,
    fontFamily: FONT.DMSans_Bold,
    color: COLOR.white,
    marginLeft:'5%'
  },
  plusIcon: {
    height: 50,
    width: 50,
    marginRight:"5%",
    tintColor:COLOR.white
  },
});
