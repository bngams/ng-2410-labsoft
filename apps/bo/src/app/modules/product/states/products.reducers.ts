import { createReducer, on } from '@ngrx/store';

import { ProductsApiActions } from './products.actions';
import { Product } from '../models/product';
import { PRODUCTS_MOCK } from '../mocks/products.mock';

export const initialState: ReadonlyArray<Product> = PRODUCTS_MOCK;

export const productsReducer = createReducer(
  initialState,
  on(ProductsApiActions.retrievedProductList, (_state, { products }) => products)
);
