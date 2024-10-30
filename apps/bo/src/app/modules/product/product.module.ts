import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { UIModule } from '@aelion/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './states/products.reducers';
import { collectionReducer } from './states/collection.reducer';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductDashboardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    UIModule,
    StoreModule.forFeature('productsFeature', {
      products: productsReducer,
      collection: collectionReducer,
    })
  ],
})
export class ProductModule { }
