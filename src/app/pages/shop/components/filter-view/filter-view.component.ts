import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
    selector: 'app-filter-view',
    templateUrl: './filter-view.component.html',
    styleUrls: ['./filter-view.component.scss']
})
export class FilterViewComponent implements OnInit {
    constructor(private _bottomSheetRef: MatBottomSheetRef<FilterViewComponent>) {}

    currentPrice = 0;
    itemTypes = ['Guitars', 'Pianos', 'Drums', 'Saxofones'];

    ngOnInit(): void {}

    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }

    formatLabel(value: number) {
        if (value >= 10000) {
            return Math.round(value / 1000) + 'K';
        }

        return value;
    }

    updatePrice($event: number | null): void {
        if ($event) {
            this.currentPrice = $event;
        } else {
            this.currentPrice = 0;
        }
    }
}
