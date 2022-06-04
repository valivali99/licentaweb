import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/shared/services/cart-service/cart.service';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.scss']
})
export class CardPaymentComponent implements OnInit {

  cardForm: UntypedFormGroup = new UntypedFormGroup({
    cardNumber: new UntypedFormControl(null, Validators.required),
    expirationDate: new UntypedFormControl(null, Validators.required),
    cvv: new UntypedFormControl(null, Validators.required)
  });

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  processPayment($event: any) {
    console.log($event)
  }

}
