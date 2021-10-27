import { IProduct } from '../../utils/types';
import {
  GetProducts,
  AddToCart,
  LoadService
} from '../actions/productsActions';

type ProductsStateModel = {
  products: Array<IProduct>;
  cart: Array<IProduct>;
};

const initialState: ProductsStateModel = {
  products: [],
  cart: []
};

export const productsReducer = (
  state: ProductsStateModel = initialState,
  action: GetProducts | AddToCart | LoadService
) => {
  switch (action.type) {
    case 'ON_GET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    case 'ON_ADD_TO_CART':
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};
