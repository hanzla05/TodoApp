import React, { useState } from 'react';
import { View, SafeAreaView, StatusBar, FlatList, Text, ScrollView } from 'react-native';
import ListItem from '../../components/ListComponent';
import RBSheet from "react-native-raw-bottom-sheet";
import useCustomToast from '../../hooks/useCustomToast';
import ExitModalContent from '../../components/ExitModalContent';
import useBottomSheet from '../../hooks/useBottomSheet';
import HomeSheetContent from '../../components/HomeSheetContent';
import HomeHeader from '../../components/HomeHeader';
import styles from './styles';
import { COLOR } from '../../data/StyleGuides';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../redux/taskSlice';
import Loader from '../../components/Loader';


export default function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.taskManager.tasks);
  console.log(tasks)
  const {
    bottomSheetRef,
    selectedPriority,
    handleOpenSheet,
    handleCloseSheet,
    handlePriorityPress,
  } = useBottomSheet(); 
  const {showToast, ToastComponent} = useCustomToast();
  const [task, setTask] = useState('')

  const handleSavePress = () => {
    if (task.trim() !== '' && selectedPriority) {
      dispatch(addTask(task, selectedPriority));
      setTask('');
      showToast('Task added in your task list');
      handleCloseSheet()
    } else {
      showToast('Please add some task to continue');
    }
  };
 
     
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={COLOR.primary}/>
      <HomeHeader onPlusPress={handleOpenSheet}/>
    {
      tasks?.length === 0 ? (
<Loader/>
      ):(
        <ScrollView>
          <View style={styles.flatListContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
      <View style={styles.lastBox}/>
        </ScrollView>
      )
    }
      <RBSheet
        ref={bottomSheetRef}
        closeOnPressMask={true}
        customStyles={styles}
        height={350}
      >
        <HomeSheetContent
          onClosePress={handleCloseSheet}
          selectedPriority={selectedPriority}
          onPriorityPress={handlePriorityPress}
          onSavePress={handleSavePress}
          onChangeTextTask={(text)=>setTask(text)}
          taskValue={task}
        />
      </RBSheet>
      <ExitModalContent/>
      <ToastComponent/>
    </SafeAreaView>
  );
}
