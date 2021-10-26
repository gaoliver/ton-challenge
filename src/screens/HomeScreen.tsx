import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationProp } from '../utils/types';

interface IHomeProps {
  navigation: NavigationProp;
}

const HomeScreen = ({ navigation }: IHomeProps) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
