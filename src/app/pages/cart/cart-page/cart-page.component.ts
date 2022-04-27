import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  isCartEmpty: boolean = false;

  item = {
    _id: '61af5d60cf516304572efaf2',
    name: "Chitara Clasica 4/4 39 Grape + husa",
    type: "Guitar",
    price: 470,
    color: "orange",
    manufacturer: "Born Free",
    isStock: true,
    description: "Chitara Clasica potrivita de la 1,50 m inaltime Tastatura din lemn de ...",
    image: "uploads/1638882656297.png",
  }


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.initPage();
  }

  initPage(): void {
    let cartNumberOfItems = this.cartService.getCartNumberOfItems()
    if (cartNumberOfItems && cartNumberOfItems > 0) {
      this.isCartEmpty = false;
    }
  }

}
