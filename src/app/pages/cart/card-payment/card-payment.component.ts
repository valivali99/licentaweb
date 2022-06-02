import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

}
