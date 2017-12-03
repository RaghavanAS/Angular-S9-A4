import { Component, OnInit, ViewChild, NgModule, Input } from '@angular/core';
import { Product} from '../models/product';
import { QuantityService } from '../Services/Quantity-Service';
import { NgForm, FormsModule } from '@angular/forms';
import { ProductService } from '../Services/Product-Service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // declaring the Quantity list arra
  QuantityList: number[]= [];
  // product instance
  product: Product = new Product();

  @ViewChild('form1') form: NgForm;

  // Using the Input directive to make use of productList array and displayDetail
  @Input() ProductList: Product[] = [];
  @Input() displayDetail: boolean = false;

// using the Quantity service and product service by constructor dependency injection
  constructor(private quantityService: QuantityService, private productService: ProductService) {
   }

   // initializing the product onInit
  ngOnInit() {
  this.product.productName = '';
  this.product.productCode = 0;
  this.product.isAvailable = false;
  this.product.quantity = 0;
  this.QuantityList = this.quantityService.getQuantity();
  this.ProductList = this.productService.getProducts();
  }

    // calling the product servcie on button click using the saveDetails method
saveDetails(pValues) {
  this.product = {
    productName: pValues.productData.productName,
    productCode: pValues.productData.productCode,
    isAvailable: pValues.productData.isAvailable,
    quantity: pValues.productData.pQuantity
  };
  // console.log(this.form.value.productData.productCode);
  this.productService.createProduct(this.product);
    this.displayDetail = true;
  this.product = new Product();
}
}
