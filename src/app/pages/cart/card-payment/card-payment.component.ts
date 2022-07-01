import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(public cartService: CartService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitPayment(): void {
    this.snackBar.open('The payment has been submitted successfully!', 'X', {
      duration: 3000
    })
  }
}
