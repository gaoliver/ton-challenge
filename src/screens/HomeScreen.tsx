import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import AppContainer from '../components/AppContainer';
import AppContent from '../components/AppContent';
import ProductBox from '../components/ProductBox';

import { NavigationProp } from '../utils/types';
import products from '../__mocks__/products';

interface IHomeProps {
  navigation: NavigationProp;
}

const HomeScreen = ({ navigation }: IHomeProps) => {
  return (
    <AppContainer>
      <AppContent>
        <FlatList data={products} renderItem={ProductBox} />
      </AppContent>
    </AppContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
