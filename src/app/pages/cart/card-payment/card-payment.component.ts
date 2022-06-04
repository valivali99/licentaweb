import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.scss']
})
export class CardPaymentComponent implements OnInit {

  cardForm: FormGroup = new FormGroup({
    cardNumber: new FormControl(null, Validators.required),
    expirationDate: new FormControl(null, Validators.required),
    cvv: new FormControl(null, Validators.required)
  });

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  processPayment($event: any) {
    console.log($event)
  }

}
