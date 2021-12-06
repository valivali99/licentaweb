import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-newsletter-view',
    templateUrl: './newsletter-view.component.html',
    styleUrls: ['./newsletter-view.component.scss']
})
export class NewsletterViewComponent implements OnInit {
    email = new FormControl(false);

    constructor() {}

    ngOnInit(): void {}
}
