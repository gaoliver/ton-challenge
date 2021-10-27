import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { Body, Header, Left, Right } from 'native-base';
import { Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/colors';
import { NavigationProp } from '../utils/types';

interface IHeaderProps {
  navigation: NavigationProp;
  query?: string;
  onChangeText?: (text: string) => void;
  onEndEditing?: () => void;
  onSubmitEditing?: () => void;
}

const translate = (props: IHeaderProps) => ({
  navigation: props.navigation,
  query: props.query ? props.query : '',
  onChangeText: props.onChangeText ? props.onChangeText : () => {},
  onEndEditing: props.onEndEditing ? props.onEndEditing : () => {},
  onSubmitEditing: props.onSubmitEditing ? props.onSubmitEditing : () => {}
});

const AppHeader = (props: IHeaderProps) => {
  const { navigation, onChangeText, query, onEndEditing, onSubmitEditing } = translate(props);
  const logo = require('../../assets/adaptive-icon.png');

  const onCartPress = () => {
    navigation.navigate('Cart');
  };
  
  const onPressLogo = () => {
    navigation.navigate('Home');
  };

  return (
    <Header
      style={styles.header}
      androidStatusBarColor={Colors.colors.primary}
      {...props}
    >
      <Left style={styles.sides}>
        <Pressable onPress={onPressLogo}>
        <Image source={logo} style={styles.logo} />
        </Pressable>
      </Left>

      <Body>
        <Searchbar
          value={query}
          placeholder="Pesquisa seu produto"
          style={styles.searchBar}
          inputStyle={styles.inputStyleSearchBar}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          onSubmitEditing={onSubmitEditing}
        />
      </Body>

      <Right style={styles.sides}>
        <FontAwesome
          name="cart-plus"
          size={40}
          color={Colors.light.accentText}
          onPress={onCartPress}
        />
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.colors.primary
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  logo: {
    width: 45,
    height: 75
  },
  sides: {
    flex: 0.18,
    marginHorizontal: 10
  },
  searchBar: {
    width: '100%',
    height: 40
  },
  inputStyleSearchBar: {
    textAlign: 'left',
    fontSize: 15,
    paddingLeft: 0,
    paddingRight: 0
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.accentText
  }
});

export default AppHeader;
