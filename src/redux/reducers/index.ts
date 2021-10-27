import { combineReducers } from 'redux';

import { productsReducer } from './productsReducer';

export const rootReducer = combineReducers({
    productsReducer: productsReducer
});

export type ApplicationReducer = ReturnType<typeof rootReducer>;