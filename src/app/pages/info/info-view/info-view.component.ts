import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.scss']
})
export class InfoViewComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit(): void {
  }


}
