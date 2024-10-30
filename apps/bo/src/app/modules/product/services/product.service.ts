
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS_MOCK } from '../mocks/products.mock';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
// import { environment } from '../../../../environments/environment';
import { ProductApiResponse } from '../models/products-api-response';

const environment = {
  apiBaseUrl: 'http://localhost:4200'
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = PRODUCTS_MOCK;

  // Subject : event new Product
  product$: Subject<Product> = new Subject();

  // BehaviorSubject (can be setup with an initial value)
  products$: BehaviorSubject<Product[]> = new BehaviorSubject(PRODUCTS_MOCK);

  constructor(private http: HttpClient) {
    this.listenProduct$();
  }

  /**
   * Add a product in the products$ behav.subject
   */
  addProduct(p: Product){
    this.products$.next([...this.products$.getValue(), p]);
  }

  listenProduct$(){
    this.product$.subscribe(p => {
      // eslint-disable-next-line no-debugger
      debugger
      this.products.push(p);
    });
  }

  loadProducts(): void {
    // es5 syntax
    // this.http.get(environment.apiBaseUrl + '/products');
    const observable: Observable<any> = this.http.get(`${environment.apiBaseUrl}/products`);
    observable.subscribe((res) => {
      this.products = res.products;
    })
  }

  // /!\ attention any
  getProducts(): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/products`);
  }

  getProductsWithType(): Observable<ProductApiResponse> {
    return this.http.get<ProductApiResponse>(`${environment.apiBaseUrl}/products`);
  }

  getProductsAsObservableProducts(): Observable<Product[]> {
    return this.http.get<ProductApiResponse>(`${environment.apiBaseUrl}/products`).pipe(
      map(res => res.products)
    );
  }
}
