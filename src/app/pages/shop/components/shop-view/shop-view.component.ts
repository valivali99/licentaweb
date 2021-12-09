import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Item } from 'src/app/shared/models/itemModel';
import { ItemService } from 'src/app/shared/services/item-service/item.service';
import { FilterViewComponent } from '../filter-view/filter-view.component';

@Component({
    selector: 'app-shop-view',
    templateUrl: './shop-view.component.html',
    styleUrls: ['./shop-view.component.scss']
})
export class ShopViewComponent implements OnInit {
    items!: Item[];

    constructor(private bottomSheet: MatBottomSheet, public itemService: ItemService) {}

    ngOnInit(): void {
        this.getItems();
    }

    getItems(): void {
        this.itemService.getItems().subscribe((response: Item[]) => {
            this.items = response;
        });
    }

    openBottomSheet(): void {
        this.bottomSheet.open(FilterViewComponent);
    }
}
