import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp
} from '@react-navigation/stack';

import { IMainNavigation, StackParamList } from './utils/types';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import AppHeader from './components/AppHeader';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';

const Stack = createStackNavigator<StackParamList>();
const MainStack = createStackNavigator<IMainNavigation>();

type MainNavigationProps = StackNavigationProp<StackParamList, 'Home'>;
type INavigationProps = { navigation: MainNavigationProps };

const ScreensNavigation = ({ navigation }: INavigationProps) => {
  return (
    <>
      <AppHeader navigation={navigation} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="MainHome" component={ScreensNavigation} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
