import { Dispatch } from 'react';
import { IProduct } from '../../utils/types';

export interface loadService {
  readonly type: 'ON_LOAD';
  payload: any;
}

export interface GetProducts {
  readonly type: 'ON_GET_PRODUCTS';
  payload: Array<IProduct>;
}

export interface AddToCart {
  readonly type: 'ON_ADD_TO_CART';
  payload: Array<IProduct>;
}

export interface ErrorActionProducts {
  readonly type: 'ON_ERROR';
  payload: any;
}

export type ProductActions = GetProducts | AddToCart | loadService | ErrorActionProducts;

export const loadService = (value: any) => {
  return async (dispatch: Dispatch<ProductActions>) => {
    dispatch({
      type: 'ON_LOAD',
      payload: value
    });
  };
};

export const GetProducts = (value: Array<IProduct>) => {
  return async (dispatch: Dispatch<ProductActions>) => {
    try {
      dispatch({
        type: 'ON_GET_PRODUCTS',
        payload: value
      });
    } catch (error) {
      dispatch({
        type: 'ON_ERROR',
        payload: error
      });
    }
  };
};

export const addToCart = (value: Array<IProduct>) => {
  return async (dispatch: Dispatch<ProductActions>) => {
    try {
      dispatch({
        type: 'ON_ADD_TO_CART',
        payload: value
      });
    } catch (error) {
      dispatch({
        type: 'ON_ERROR',
        payload: error
      });
    }
  };
};
