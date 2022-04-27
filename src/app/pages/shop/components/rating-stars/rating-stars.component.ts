import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent {

  @Input() rating: string = '4';
  imageUrl = "";

  constructor() {
    this.imageUrl = "../../../../../assets/stars/" + this.rating + ".png";
  }


}
