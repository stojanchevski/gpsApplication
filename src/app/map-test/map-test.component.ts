import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map-test.component.html',
  styleUrls: ['./map-test.component.css']
})
export class MapTestComponent implements OnInit {
  [x: string]: any;

  private map: L.Map;
  private centroid: L.LatLngExpression = [41.12304268674125, 20.801238437934924]; //

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    //   // L.Routing.control({
    //   // waypoints: [
    //   //   L.latLng(57.74, 11.94),
    //   //   L.latLng(57.6792, 11.949)
    //   // ]
    // }).addTo(this.map);

    // create 5 random jitteries and add them to map
    const jittery = Array(5).fill(this.centroid).map(
        x => [x[0] + (Math.random() - .5)/10, x[1] + (Math.random() - .5)/10 ]
      ).map(
        x => L.marker(x as L.LatLngExpression)
      ).forEach(
        x => x.addTo(this.map)
      );

    tiles.addTo(this.map);

  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

}
