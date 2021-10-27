import React, { useEffect } from 'react';
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
  const dispatch = useDispatch();
  const {products, loading} = useSelector(
    (state: ApplicationReducer) => state.productsReducer
  );

  const onPressProduct = (productId: number) => {
    navigation.navigate('Product', { productId });
  };

  type IRenderItem = { item: IProduct };
  const renderProduct = ({ item }: IRenderItem) => (
    <ProductBox item={item} onProductPress={() => onPressProduct(item.id)} />
  );

  const getProducts = async () => {
    dispatch(productActions.loadService(true));
    const result = await requester(service);
    dispatch(productActions.GetProducts(result.data));
    dispatch(productActions.loadService(false));
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
