import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type NavigationProp = StackNavigationProp<StackParamList, 'Home'>;

export type StackParamList = {
  Home: NavigationProp;
  Cart: undefined;
  Product: undefined;
};
export type IMainNavigation = {
  MainHome: NavigatorScreenParams<StackParamList>;
};
