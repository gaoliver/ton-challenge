import React, { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as productActions from '../redux/actions/productsActions';
import ProductList from '../components/ProductList';
import colors from '../constants/colors';
import { ApplicationReducer } from '../redux';
import currencyFormat from '../utils/currencyFormat';
import { IProduct } from '../utils/types';

const CartScreen = () => {
  const dispatch = useDispatch();
  const { cart: products, loading } = useSelector(
    (state: ApplicationReducer) => state.productsReducer
  );
  const totalQuantity = products.length;
  const textPluralSingular = totalQuantity > 1 ? 'produtos' : 'produto';

  const onPressRemove = (productId: number) => {
    dispatch(productActions.loadService(true));
    let newCart = products;
    const productIndex = newCart.findIndex(
      (product: IProduct) => product.id === productId
    );
    newCart.splice(productIndex);
    dispatch(productActions.addToCart(newCart));
    dispatch(productActions.loadService(false));
  };

  type IProductList = { item: IProduct };
  const renderProduct = ({ item }: IProductList) => {
    return <ProductList item={item} onPress={() => onPressRemove(item.id)} />;
  };

  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < totalQuantity; i++) {
      sum = sum + products[i].price;
    }

    return currencyFormat(sum);
  };

  return (
    <>
      <Text
        style={styles.title}
      >{`${totalQuantity} ${textPluralSingular} - ${totalPrice()}`}</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            colors={[colors.colors.primary]}
          />
        }
      />
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  title: {
    fontSize: 18,
    margin: 10,
    color: colors.light.text
  }
});
