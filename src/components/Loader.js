import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Cat } from '../data/Images'
import { COLOR, FONT } from '../data/StyleGuides';
import Video from 'react-native-video';
export default function Loader() {
  return (
    <View style={styles.nullArray}>
    <Video
 source={Cat}
 resizeMode="cover"
 style={styles.video}
 repeat={true}
 paused={false}
/>
<Text style={styles.noTaskTxt}>No Tasks Yet !</Text>
</View>
  )
}


const styles = StyleSheet.create({
    nullArray:{
      alignItems:'center',justifyContent:"center",marginTop:'50%'
    },
    noTaskTxt:{
      fontSize:18,color:COLOR.black,fontFamily:FONT.DMSans_Medium,bottom:20
    },video:{
        height:200,width:200
      },
  });
  