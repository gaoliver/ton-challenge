import { IProduct } from '../../utils/types';
import { GetProducts, AddToCart } from '../actions/productsActions';

type JobsStateModel = {
  products: Array<IProduct>;
  cart: Array<IProduct>;
};

const initialState: JobsStateModel = {
  products: [],
  cart: []
};

export const productsReducer = (
  state: JobsStateModel = initialState,
  action: GetProducts | AddToCart
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
