import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { COLOR, FONT } from '../data/StyleGuides';
import CustomCheckbox from './CustomCheckBox';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import { Trash } from '../data/Images';



const ListItem = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
    
  };

  return (
    <View style={styles.listItemContainer}>
      <CustomCheckbox isChecked={isChecked} onPress={handleCheckboxChange} />
      <Text style={styles.listItemText}>{item.task}</Text>
      <View style={[styles.priority,{backgroundColor:item?.priority === 'Normal' ? 'orange' : item?.priority === 'High' ? 'red' : item?.priority === 'Low' ? 'green' : null}]}/>
      {isChecked && (
        <TouchableOpacity onPress={()=>handleDeleteTask(item?.id)} style={styles.trashIconContainer}>
          <Image
            style={styles.trashIcon}
            source={Trash}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
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
  },
  checked: {
    backgroundColor: COLOR.primary,
  },
  listItemText: {
    fontSize: 16,
    fontFamily: FONT.DMSans_SemiBold,
    color: COLOR.black,
    marginLeft: '2%',
    width:'60%'
  },
  trashIconContainer: {
    marginLeft: 'auto',
    marginRight: '5%',
  },
  trashIcon: {
    height: 30,
    width: 30,
  },
  priority:{
    height:10,width:10,borderRadius:10,
    marginLeft:'5%'
  }
});

export default ListItem;
