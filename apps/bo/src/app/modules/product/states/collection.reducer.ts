import { createReducer, on } from '@ngrx/store';
import { ProductsActions } from './products.actions';
import { Product } from '../models/product';

export const initialState: ReadonlyArray<Product> = [];

export const collectionReducer = createReducer(
  initialState,
  on(ProductsActions.removeProduct, (state, { product }) =>
    state.filter((p) => p.id !== product.id)
  ),
  on(ProductsActions.addProduct, (state, { product }) => {
    //if (state.find(p => p.title === product.title)) return state;

    return [...state, product];
  })
);
