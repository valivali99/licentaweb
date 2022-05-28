import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shop-sidenav',
    templateUrl: './shop-sidenav.component.html',
    styleUrls: ['./shop-sidenav.component.scss']
})
export class ShopSidenavComponent implements OnInit {
    currentPrice = 0;

    constructor() {}

    ngOnInit(): void {}

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
