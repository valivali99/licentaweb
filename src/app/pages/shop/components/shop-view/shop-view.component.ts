import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FilterViewComponent } from '../filter-view/filter-view.component';

@Component({
    selector: 'app-shop-view',
    templateUrl: './shop-view.component.html',
    styleUrls: ['./shop-view.component.scss']
})
export class ShopViewComponent implements OnInit {
    constructor(private _bottomSheet: MatBottomSheet) {}

    openBottomSheet(): void {
        this._bottomSheet.open(FilterViewComponent);
    }

    ngOnInit(): void {}
}
