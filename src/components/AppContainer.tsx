import { Container } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const AppContainer: React.FC = ({ children }) => {
  return <Container style={styles.container}>{children}</Container>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background
  }
});

export default AppContainer;