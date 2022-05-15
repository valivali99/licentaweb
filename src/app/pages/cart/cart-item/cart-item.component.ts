import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/itemModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item!: Item;

  imagePath: string = '';

  constructor() { }

  ngOnInit(): void {
    this.imagePath = `${environment.endpoint}/` + this.item.image;
  }

}
