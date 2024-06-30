import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mainContainer: {
    flex: 1,
    backgroundColor:COLOR.white
  },
  flatListContainer: {
    marginTop: '10%',
    marginLeft: '5%',
  },
  bottomSheet: {
    height: 350,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLOR.White
  },
  nullArray:{
    alignItems:'center',justifyContent:"center",marginTop:'50%'
  },
  noTaskTxt:{
    fontSize:18,color:COLOR.black,fontFamily:FONT.DMSans_Medium,bottom:20
  },
  lastBox:{
    height:100
  }
});

export default styles;
