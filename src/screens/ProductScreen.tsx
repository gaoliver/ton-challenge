import { Footer } from 'native-base';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as productActions from '../redux/actions/productsActions';
import AppContent from '../components/AppContent';
import PrimaryButton from '../components/PrimaryButton';
import TextCategory from '../components/TextCategory';
import colors from '../constants/colors';
import { borderRadius } from '../constants/settings';
import { ApplicationReducer } from '../redux';
import currencyFormat from '../utils/currencyFormat';
import { IProduct, NavigationParamsProp } from '../utils/types';
import AppBox from '../components/AppBox';

const ProductScreen = ({ route, navigation }: NavigationParamsProp) => {
  const { productId } = route.params;
  const dispatch = useDispatch();
  const { products, cart } = useSelector(
    (state: ApplicationReducer) => state.productsReducer
  );
  const product = products.find((prod: IProduct) => prod.id === productId);

  const updateCart = () => {
    let cartList = cart;

    if (product) {
      cartList.push(product);
    }

    return cartList;
  };

  const addToCart = () => {
    const result = updateCart();
    dispatch(productActions.addToCart(result));
    return navigation.navigate('Cart');
  };

  const translate = {
    image: product?.image ? product.image : undefined,
    category: product?.category ? product.category : '',
    title: product?.title ? product.title : '',
    description: product?.description ? product.description : '',
    price: product?.price ? product.price : 0
  };

  return (
    <>
      <AppContent>
        <AppBox boxStyle={styles.box}>
          <Image source={{ uri: translate.image }} style={styles.image} />
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <TextCategory name={translate.category} />
          </View>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{currencyFormat(translate.price)}</Text>
          <View style={styles.description}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{translate.description}</Text>
          </View>
        </AppBox>
      </AppContent>
      <Footer style={styles.footer}>
        <PrimaryButton text="Adicionar ao carrinho" onPress={addToCart} />
      </Footer>
    </>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  box: {
    width: '100%',
    alignItems: 'flex-start'
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: '#FFF',
    borderRadius: borderRadius
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: colors.light.text
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.colors.price
  },
  description: {
    marginTop: 30
  },
  descriptionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.light.text
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 10,
    color: colors.light.text
  },
  footer: {
    backgroundColor: '#FFF',
    height: 90,
    paddingTop: 15,
    alignItems: 'flex-start'
  }
});
