import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import { COLOR, FONT } from '../data/StyleGuides';
import { CLose } from '../data/Images';

const HomeSheetContent = ({ onSavePress, onPriorityPress, onClosePress, selectedPriority , onChangeTextTask , taskValue }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add a new task</Text>
        <TouchableOpacity onPress={onClosePress}>
          <Image style={styles.closeIcon} source={CLose} />
        </TouchableOpacity>
      </View>
      <TextInput
        placeholderTextColor={COLOR.primaryBlack}
        style={styles.input}
        placeholder='Enter your task'
        onChangeText={onChangeTextTask}
        value={taskValue}
      />
      <Text style={styles.priorityText}>Priority</Text>

      <View style={styles.priorityButtons}>
        <TouchableOpacity
          style={[styles.priorityButton, { backgroundColor: selectedPriority === 'High' ? 'red' : 'grey' }]}
          onPress={() => onPriorityPress('High')}
        >
          <Text style={styles.buttonText}>High</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.priorityButton, { backgroundColor: selectedPriority === 'Normal' ? 'orange' : 'grey' }]}
          onPress={() => onPriorityPress('Normal')}
        >
          <Text style={styles.buttonText}>Normal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.priorityButton, { backgroundColor: selectedPriority === 'Low' ? 'green' : 'grey' }]}
          onPress={() => onPriorityPress('Low')}
        >
          <Text style={styles.buttonText}>Low</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onSavePress} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '6%',
    marginTop: '5%',
  },
  headerText: {
    fontSize: 20,
    color: COLOR.black,
    fontFamily: FONT.DMSans_Bold,
  },
  closeIcon: {
    height: 20,
    width: 20,
  },
  input: {
    height: 60,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    marginTop: '10%',
    fontSize: 18,
    fontFamily: FONT.DMSans_SemiBold,
    color: COLOR.primaryBlack,
    paddingLeft: 20,
    paddingRight:20
  },
  priorityText: {
    fontSize: 15,
    color: COLOR.black,
    fontFamily: FONT.DMSans_SemiBold,
    marginLeft: '6%',
    marginTop: '5%',
  },
  priorityButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '3%',
  },
  priorityButton: {
    height: 50,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 17,
    fontFamily: 'DMSans-SemiBold',
    color: 'white',
  },
  saveButton: {
    height: 60,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLOR.primary,
    marginTop: '5%',
    borderRadius: 10,
    marginTop: '10%',
  },
  saveButtonText: {
    fontSize: 20,
    fontFamily: FONT.DMSans_SemiBold,
    color: COLOR.White,
  },
});

export default HomeSheetContent;
