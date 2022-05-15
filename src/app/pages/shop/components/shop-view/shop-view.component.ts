import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Item } from 'src/app/shared/models/itemModel';
import { ItemService } from 'src/app/shared/services/item-service/item.service';
import { FilterModel } from '../../models/filter-model';

@Component({
    selector: 'app-shop-view',
    templateUrl: './shop-view.component.html',
    styleUrls: ['./shop-view.component.scss']
})
export class ShopViewComponent implements OnInit {

    searchForm = new FormGroup({
        searchText: new FormControl('')
    })

    items!: Item[];

    constructor(private bottomSheet: MatBottomSheet, public itemService: ItemService) { }

    ngOnInit(): void {
        this.getItems();
    }

    getItems(): void {
        this.itemService.getItems().subscribe((response: Item[]) => {
            this.items = response;
        });
    }

    filter(): string {
        return this.searchForm.controls['searchText'].value.toLowerCase();
    }

    getFilters($event: FilterModel): void {
        console.log($event)
    }
}
