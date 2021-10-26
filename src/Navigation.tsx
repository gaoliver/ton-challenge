import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp
} from '@react-navigation/stack';

import { StackParamList } from './utils/types';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator<StackParamList>();

type MainNavigationProps = StackNavigationProp<StackParamList, "Home">;

interface INavigationProps {
  navigation: MainNavigationProps
}

const Navigation = ({ navigation }: INavigationProps) => {
  const onCartPress = () => {
    navigation.navigate('Cart');
  };

  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </>
  );
};

export default Navigation;