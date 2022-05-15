import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cartItemModel';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  isCartEmpty: boolean = true;
  cartItems: CartItem[] = [];

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.initPage();
  }

  initPage(): void {
    let cartNumberOfItems = this.cartService.getCartNumberOfItems()
    if (cartNumberOfItems && cartNumberOfItems > 0) {
      this.isCartEmpty = false;

      this.cartItems = this.cartService.cartItems.filter(el => el.quantity > 0);
    }
  }

}
