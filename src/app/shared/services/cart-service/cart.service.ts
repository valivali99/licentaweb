import { Injectable } from '@angular/core';
import { CartItem } from '../../models/cartItemModel';
import { Item } from '../../models/itemModel';
import { ItemService } from '../item-service/item.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  constructor(private itemService: ItemService) {
    this.itemService.getItems().subscribe((response: Item[]) => {
      response.forEach(item => {
        let newCartItem: CartItem = {
          item: item,
          quantity: 0
        }
        this.cartItems.push(newCartItem);
      });
    });
  }

  addItemToCart(item: Item): void {
    let found = this.cartItems.find(el => el.item._id === item._id);

    if (found) {
      found.quantity += 1;
    }
  }

  removeItemFromCart(item: Item): void {
    let found = this.cartItems.find(el => el.item._id === item._id);

    if (found && found.quantity > 0) {
      found.quantity -= 1;
    }
  }

  getCartNumberOfItems(): number {
    let cartNumberOfItems = 0;

    this.cartItems.forEach(item => {
      if (item.quantity) {
        cartNumberOfItems += item.quantity;
      }
    });

    return cartNumberOfItems;
  }

  deleteItemFromCart(item: Item): void {
    let found = this.cartItems.find(el => el.item._id === item._id);

    if (found && found.quantity > 0) {
      found.quantity = 0;
    }
  }
}
