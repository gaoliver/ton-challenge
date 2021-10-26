import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type NavigationProp = StackNavigationProp<StackParamList, 'Home'>;

export type StackParamList = {
  Home: NavigationProp;
  Cart: undefined;
  Product: { productId: number };
};
export type IMainNavigation = {
  MainHome: NavigatorScreenParams<StackParamList>;
};

export type IProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
