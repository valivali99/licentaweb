import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    filteredItems!: Item[];

    constructor(public itemService: ItemService) { }

    ngOnInit(): void {
        this.getItems();
    }

    getItems(): void {
        this.itemService.getItems().subscribe((response: Item[]) => {
            this.items = response;
            this.filteredItems = response;
        });
    }

    searchByName(): string {
        return this.searchForm.controls['searchText'].value.toLowerCase();
    }

    getFilters($event: FilterModel): void {
        let finalFilteredItems: Item[] = [];

        if ($event.types.length > 0) {
            $event.types.forEach(type => {
                this.items.forEach(item => {
                    if (item.type.toLocaleLowerCase() === type.toLocaleLowerCase()) {
                        finalFilteredItems.push(item);
                    }
                });
            });
        }
        else {
            finalFilteredItems = this.items;
        }

        this.filteredItems = finalFilteredItems.filter(el => el.price > $event.startingPrice);
        this.searchByName();
    }
}
