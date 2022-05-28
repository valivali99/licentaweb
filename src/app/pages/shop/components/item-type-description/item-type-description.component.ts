import { Component, Input, OnInit } from '@angular/core';
import { InstrumentTypeDescription } from 'src/app/shared/enums/instrument-type-description-enum';

@Component({
  selector: 'app-item-type-description',
  templateUrl: './item-type-description.component.html',
  styleUrls: ['./item-type-description.component.scss']
})
export class ItemTypeDescriptionComponent implements OnInit {

  @Input() instrumentType!: string;

  description!: string;

  constructor() { }

  ngOnInit(): void {
    this.getInstrumentTypeDescription();
  }

  getInstrumentTypeDescription(): void {
    switch (this.instrumentType.toLocaleLowerCase()) {
      case "guitar": {
        this.description = InstrumentTypeDescription.Guitar;
        break;
      }
      case "piano": {
        this.description = InstrumentTypeDescription.Piano;
        break;
      }
      case "violin": {
        this.description = InstrumentTypeDescription.Violin;
        break;
      }
      case "single-reed": {
        this.description = InstrumentTypeDescription.SingleReed;
        break;
      }
    }
  }

}
