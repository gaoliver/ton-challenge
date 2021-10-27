import { IProduct } from '../../utils/types';
import {
  GetProducts,
  AddToCart,
  loadService
} from '../actions/productsActions';

type ProductsStateModel = {
  loading: boolean;
  products: Array<IProduct>;
  cart: Array<IProduct>;
};

const initialState: ProductsStateModel = {
  loading: false,
  products: [],
  cart: []
};

export const productsReducer = (
  state: ProductsStateModel = initialState,
  action: GetProducts | AddToCart | loadService
) => {
  switch (action.type) {
    case 'ON_LOAD':
      return {
        ...state,
        loading: action.payload
      };
    case 'ON_GET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    case 'ON_ADD_TO_CART':
      return {
        ...state,
        cart: action.payload
      };
    default:
      return state;
  }
};
