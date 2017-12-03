import { Injectable } from '@angular/core';

@Injectable()
export class QuantityService {

  // declaring the QuantityList array
  QuantityList: number[]= [];
  // initializing the quantity list array
  constructor() {
      for (let i = 9; i >= 0; i-- ) {
        this.QuantityList.unshift(i);
      }
  }
  // returns the quantitylist back to the calling function
  getQuantity(): number[] {
    return this.QuantityList;
  }
}
