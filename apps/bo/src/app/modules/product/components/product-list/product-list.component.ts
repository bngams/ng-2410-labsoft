import { Component, Input, ViewChildren, QueryList, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PRODUCTS_MOCK } from '../../mocks/products.mock';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { ProductApiResponse } from '../../models/products-api-response';
import { Store } from '@ngrx/store';

enum LOAD_MODE {
  MOCK,
  REQUEST,
  SERVICE_STORE,
  SERVICE_STORE_BEHAV,
  NGRX_STORE,
  REQUEST_OBSERVABLE
}

type LocalState = {
  productsFeature: {
    products: readonly Product[]
  }
}

@Component({
  selector: 'bo-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductCardComponent) cards!: QueryList<ProductCardComponent>;

  @Input()
  productsInput!: Product[];

  products: Product[] = [];

  products$!: Observable<readonly Product[]>;

  loading = false;
  loadMode: LOAD_MODE = LOAD_MODE.NGRX_STORE;
  loadModes = LOAD_MODE;

  // inject class ProductService
  constructor(private store: Store<LocalState>, public productsService: ProductService) {
    // better to init in ngInit method (lifecycle hooks)
    // this.products = productsService.products;
  }

  ngOnInit(): void {
    this.initData();
    this.initListeners();
  }

  appendProduct(product: Product) {
    this.products.push(product);
  }

  // TODO: can be a global method from a common parent class
  initData(): void {
    switch (this.loadMode) {
      case LOAD_MODE.MOCK:
        this.loadFromMocks();
        break;
      case LOAD_MODE.SERVICE_STORE:
        this.loadFromService(); // like a "SERVICE_STORE" service
        break;
      case LOAD_MODE.REQUEST_OBSERVABLE:
        this.loadProductsAsObservable();
        break;
      case LOAD_MODE.NGRX_STORE:
          this.loadFromNgrxStore();
          break;
      case LOAD_MODE.REQUEST:
      default:
        this.loadProducts();
        break;
    }
  }

  // TODO: can be a global method from a common parent class
  initListeners(): void {
    // simple subject
    this.listenProduct$FromService();
    // behavior subjetc
    this.listenProducts$FromService();
  }

  listenProduct$FromService(): void {
    // listener
    this.productsService.product$.subscribe(p => this.products.push(p));
  }

  listenProducts$FromService(): void {
    // listener
    this.productsService.products$.subscribe( p => console.log("Subscribe product service subject", p));
  }

  loadFromNgrxStore(): void {
    this.products$ = this.store.select(state => state.productsFeature.products );
  }

  loadFromMocks(): void {
    this.loading = true;
    this.products = PRODUCTS_MOCK;
    this.loading = false;
  }

  loadProducts(): void {
    this.loading = true;

    // observable complete syntax
    // const observable = this.productsService.getProducts();
    // const observer = {
    //   next: (res:any) => {  this.products = res.products },
    //   error: (e:any) => console.log(e),
    //   complete: () => console.log()
    // }
    // observable.subscribe(observer);

    // syntaxe "simplifiée"
    this.productsService.getProducts().subscribe(
      (res: ProductApiResponse) => {
        console.log("res", res);
        this.products = res.products;
        this.loading = false;
      }
    ).unsubscribe(); // /!\ unsubscribe
  }

  loadProductsAsObservable(): void {
    this.products$ = this.productsService.getProductsAsObservableProducts();
  }

  // products are loaded in service instance (like a SERVICE_STORE)
  loadFromService(): void {
    this.productsService.loadProducts();
  }
}
