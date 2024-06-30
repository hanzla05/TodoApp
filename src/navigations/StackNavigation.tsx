import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import * as screens from '../screens';
import { SCREEN } from '../data/enums';


const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptionStyle}
        initialRouteName={SCREEN.Home}>
        <Stack.Screen name={SCREEN.Home} component={screens.Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;





