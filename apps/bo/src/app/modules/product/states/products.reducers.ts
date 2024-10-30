import { createReducer, on } from '@ngrx/store';

import { ProductsActions, ProductsApiActions } from './products.actions';
import { Product } from '../models/product';
import { PRODUCTS_MOCK } from '../mocks/products.mock';

export const initialState: ReadonlyArray<Product> = PRODUCTS_MOCK;

export const productsReducer = createReducer(
  initialState,
  on(ProductsApiActions.retrievedProductList, (_state, { products }) => products),
  // TODO: handle remove with id only
  on(ProductsActions.removeProduct, (state, { product }) => {
    return state.filter((p) => p.title !== product.title)
  }),
  on(ProductsActions.addProduct, (state, { product }) => {
    return [...state, product];
  })
);
