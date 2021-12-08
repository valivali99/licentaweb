import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from '../../models/itemModel';
@Component({
    selector: 'app-item-card',
    templateUrl: './item-card.component.html',
    styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
    @Input() item!: Item;
    path: string = '';

    constructor() {}

    ngOnInit(): void {
        this.applyItemPath();
    }

    applyItemPath(): void {
        this.path = `${environment.endpoint}/` + this.item.image;
    }
}
