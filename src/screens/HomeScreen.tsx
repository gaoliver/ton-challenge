import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as productActions from '../redux/actions/productsActions';
import requester from '../api/requester';
import service from '../api/service';
import ProductBox from '../components/ProductBox';
import { ApplicationReducer } from '../redux';
import { IProduct, NavigationProp } from '../utils/types';
import colors from '../constants/colors';

interface IHomeProps {
  navigation: NavigationProp;
}

const HomeScreen = ({ navigation }: IHomeProps) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector(
    (state: ApplicationReducer) => state.productsReducer.products
  );

  const onPressProduct = (productId: number) => {
    navigation.navigate('Product', { productId });
  };

  type IRenderItem = { item: IProduct };
  const renderProduct = ({ item }: IRenderItem) => (
    <ProductBox item={item} onProductPress={() => onPressProduct(item.id)} />
  );

  const getProducts = async () => {
    setLoading(true);
    const result = await requester(service);
    dispatch(productActions.GetProducts(result.data));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      numColumns={2}
      style={styles.container}
      columnWrapperStyle={styles.listStyle}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={getProducts}
          colors={[colors.colors.primary]}
        />
      }
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  listStyle: {
    justifyContent: 'space-between',
    marginBottom: 8
  }
});
