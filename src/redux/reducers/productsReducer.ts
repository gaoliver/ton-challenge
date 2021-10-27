import { IProduct } from '../../utils/types';
import { ProductActions } from '../actions/productsActions';

type ProductsStateModel = {
  loading: boolean;
  query: string;
  products: Array<IProduct>;
  cart: Array<IProduct>;
};

const initialState: ProductsStateModel = {
  loading: false,
  query: '',
  products: [],
  cart: []
};

export const productsReducer = (
  state: ProductsStateModel = initialState,
  action: ProductActions
) => {
  switch (action.type) {
    case 'ON_LOAD':
      return {
        ...state,
        loading: action.payload
      };
    case 'ON_SEARCH_PRODUCTS':
      return {
        ...state,
        query: action.payload
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
