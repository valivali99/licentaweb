import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cartItemModel';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem!: CartItem;

  imagePath: string = '';
  priceWithQuantity: number = 0;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.getImagePath();
    this.calculateItemPriceWithQuantity();
  }

  getImagePath(): void {
    this.imagePath = `${environment.endpoint}/` + this.cartItem.item.image;
  }

  calculateItemPriceWithQuantity(): void {
    this.priceWithQuantity = this.cartItem.item.price * this.cartItem.quantity;
  }

  addQuantity(): void {
    this.cartService.addItemToCart(this.cartItem.item);
    this.calculateItemPriceWithQuantity();
  }

  removeQuantity(): void {
    this.cartService.removeItemFromCart(this.cartItem.item);
    this.calculateItemPriceWithQuantity();
  }

  deleteItemFromCart(): void {
    this.cartService.deleteItemFromCart(this.cartItem.item);
  }
}
