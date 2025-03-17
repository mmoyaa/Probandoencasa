import { Injectable } from '@angular/core';
import Product from '../models/product';

@Injectable({
  providedIn: 'root'
})


export class NUEVOService {
product: Product;
  constructor() { 
    this.product = {
      name: 'Laptop',
      price: 1000,
      isforSale: true
    };
  }



  setproductname(name: string): void {
    this.product.name = name;
  }
}
