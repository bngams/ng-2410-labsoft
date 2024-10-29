import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

enum SUBMIT_MODE {
  OUTPUT,
  SERVICE_ATTR,
  SERVICE_SUBJECT,
  SERVICE_BEHAV_SUBJECT
}

enum FORM_MODE {
  TYPES,
  GENERIC_TYPING,
  UNTYPED
}

/**
 * Allow to handle generic typed form
 * Source: https://betterprogramming.pub/how-to-build-a-strongly-typed-angular-14-super-form-86837965a0e5
 */
// TODO: put in a separated file and better location
export type ControlsOf<T extends Record<string, any>> = {
  // title: FormControl<string>;
  [K in keyof T]: T[K] extends Record<any, any>
  ? FormGroup<ControlsOf<T[K]>>
  : FormControl<T[K]>;
};

@Component({
  selector: 'fo-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  private submitMode: SUBMIT_MODE = SUBMIT_MODE.OUTPUT;
  private formMode: FORM_MODE = FORM_MODE.UNTYPED;

  @Output()
  productSubmit: EventEmitter<Product> = new EventEmitter();

  // create object form
  // untyped => new UntypedFormGroup({
  // with type => (since angular 14/15)
  productForm!: FormGroup | UntypedFormGroup | FormGroup<ControlsOf<Product>>;

  constructor(private productService: ProductService) { }

  initForm() {
    switch (this.formMode) {
      case FORM_MODE.TYPES:
        this.initFormWithTypes();
        break;
      case FORM_MODE.GENERIC_TYPING:
          this.initFormWithGenericTyping();
          break;
      default:
        this.initFormUntyped();
        break;
    }
  }

  initFormWithTypes() {
    throw new Error('Method not implemented.');
  }

  initFormWithGenericTyping() {
    this.productForm = new FormGroup<ControlsOf<Product>>({
      title: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.minLength(3)]}),
      price: new FormControl(0, {nonNullable: true, validators: [Validators.required, Validators.min(1)]})
    });
  }

  initFormUntyped() {
    this.productForm = new UntypedFormGroup({
      title: new FormControl('', {validators: [Validators.required, Validators.minLength(3)]}),
      price: new FormControl(0, {validators: [Validators.required, Validators.min(1)]})
    });
  }

  submit(): void {
    // let vs const
    const product: Product = this.productForm.value;

    // debugger vs console.log(product)

    switch (this.submitMode) {
      case SUBMIT_MODE.OUTPUT:
        // with @Output()
        this.submitWithOuput(product);
        break;
      case SUBMIT_MODE.SERVICE_SUBJECT:
          // with service (@Injectable)
          // product Simple Subject attribute
          this.submitWithServiceSubject(product);
          break;
      case SUBMIT_MODE.SERVICE_BEHAV_SUBJECT:
        // with service (@Injectable)
        // product Behaviour Subject attribute
        this.submitWithServiceBehaviorSubject(product);
        break;
      case SUBMIT_MODE.SERVICE_ATTR:
      default:// with service (@Injectable)
        // product attribute
        this.productService.products.push(product);
        break;
    }
  }

  private submitWithOuput(product: Product): void {
    this.productSubmit.emit(product);
  }

  private submitWithServiceSubject(product: Product): void {
    this.productService.product$.next(product);
  }

  private submitWithServiceBehaviorSubject(product: Product): void {
    // TODO: do it in a better way to push a single value only
    const products = this.productService.products$.value;
    products.push(product);
    this.productService.products$.next(products);
  }
}
