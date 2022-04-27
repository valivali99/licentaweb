import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from '../../models/itemModel';
import { CartService } from '../../services/cart-service/cart.service';
@Component({
    selector: 'app-item-card',
    templateUrl: './item-card.component.html',
    styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
    @Input() item!: Item;
    cartArray: any;
    path: string = '';

    constructor(private cartService: CartService) { }

    ngOnInit(): void {
        this.applyItemPath();
    }

    applyItemPath(): void {
        this.path = `${environment.endpoint}/` + this.item.image;
    }

    addToCart($event: any): void {
        $event.stopPropagation();

        this.cartService.addItemToCart(this.item);
        console.log(this.cartService.cartArray)
    }
}
