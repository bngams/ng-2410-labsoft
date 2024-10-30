import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { Store } from '@ngrx/store';
import { ProductsActions } from '../../states/products.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  // property binding [product]
  @Input()
  product!: Product;

  // DI
  constructor(private store: Store) { }

  // Init
  // ngOnInit()

  remove() {
    // TODO: handle remove with id only
    this.store.dispatch(ProductsActions.removeProduct({ product : this.product } ))
  }
}
