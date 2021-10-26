import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackParamList } from './utils/types';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator<StackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
