import { createActionGroup, props } from '@ngrx/store';
import { Product } from '../models/product';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Add Product': props<{ product: Product }>(),
    'Remove Product': props<{ product: Product }>(),
  },
});

export const ProductsApiActions = createActionGroup({
  source: 'Products API',
  events: {
    'Retrieved Product List': props<{ products: ReadonlyArray<Product> }>(),
  },
});
