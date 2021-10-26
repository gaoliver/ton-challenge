import { Container } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const AppContainer: React.FC = ({ children }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.light.background
    }
  });
  return <Container style={styles.container}>{children}</Container>;
};

export default AppContainer;