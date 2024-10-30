import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss'
})
export class ProductDashboardComponent implements OnInit, AfterViewInit{

  @ViewChild(ProductListComponent)
  productList!: ProductListComponent;

  constructor() {
    console.log('productList from constructor', this.productList);
  }

  ngOnInit() {
    console.log('productList from ngOnInit', this.productList);
  }

  ngAfterViewInit() {
    console.log('productList from ngAfterViewInit', this.productList);
  }

  newProduct(product: Product) {
    this.productList.appendProduct(product);
  }


}
