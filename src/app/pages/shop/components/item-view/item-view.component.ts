import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/shared/models/itemModel';
import { ItemService } from 'src/app/shared/services/item-service/item.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-item-view',
    templateUrl: './item-view.component.html',
    styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {
    item: Item = {
        _id: '',
        name: '',
        type: '',
        price: 0,
        color: '',
        manufacturer: '',
        isStock: false,
        image: '',
        description: ''
    };
    imagePath = '';

    constructor(private itemService: ItemService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.initializeItem();
    }

    initializeItem(): void {
        const id = this.route.snapshot.paramMap.get('id');

        this.itemService.getItem(id!).subscribe((response: Item) => {
            this.item = response;
            this.imagePath = `${environment.endpoint}/` + this.item.image;
        });
    }
}
