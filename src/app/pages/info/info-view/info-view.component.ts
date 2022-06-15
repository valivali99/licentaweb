import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.scss']
})
export class InfoViewComponent implements OnInit, AfterViewInit {

  @ViewChild(GoogleMap) map!: GoogleMap;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 47.041205751135216, lng: 21.941376328468323 },
    zoom: 18,
  }
  marker = {
    position: { lat: 47.041205751135216, lng: 21.941376328468323 }
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const streetView = this.map.getStreetView();

    streetView.setOptions({
      position: { lat: 47.041205751135216, lng: 21.941376328468323 },
      pov: { heading: 20, pitch: 10 },
    });

    streetView.setVisible(true);
  }


}
