import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductComponent} from '../product/product.component';

@Injectable()
export class ProductService {

    // decaring the productList array to add the new product coming i
  ProductList: Product[]= [];

  constructor() {}

// returns the productList array
  getProducts(): Product[] {
      return this.ProductList;
  }

  // the saveDetails method from the component send the product to be stored
  // by passing it in the createProduct
  createProduct(newProduct: Product) {
      console.log(newProduct);
    this.ProductList.unshift(newProduct);
    // console.log(this.productList);
    }
}
