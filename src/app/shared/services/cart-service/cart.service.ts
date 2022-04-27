import { Injectable } from '@angular/core';
import { Item } from '../../models/itemModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartArray: Item[] = [];

  constructor() { }

  addItemToCart(item: Item): void {
    this.cartArray.push(item);
  }

  getCartNumberOfItems(): number {
    return this.cartArray ? this.cartArray.length : 0;
  }
}
