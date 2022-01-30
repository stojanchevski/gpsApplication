import { Grocery } from '../models/grocery';
import { GroceryService } from '../services/grocery.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, LatLng, Map, Marker, Icon, Point } from 'leaflet';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
//unused imports removed

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  groceriesList : Grocery[];
  constructor(private groceryService : GroceryService) {}

  ngOnInit() {
    this.getGroceries();
    this.getLocation();
  }

    public getGroceries(): void {
      this.groceryService.getGroceries().subscribe(data =>{
        this.groceriesList = data;}
      );
    }
    lat: number=0;
    lng: number=0;
    public getLocation(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
          if (position) {
            console.log("Latitude: " + position.coords.latitude +
              "Longitude: " + position.coords.longitude);
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.addMarker(latLng(this.lat,this.lng));
          }

        },
          (error: GeolocationPositionError) => console.log(error));
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }

      public getBeaches(): void {
        this.groceryService.getGroceries().subscribe(data =>{
          this.groceriesList = data;}
        );
      }
      title = 'osm-routing-demo';
      map = undefined;
      markers = [];


      options = {
        layers: [
          tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
          })
        ],
        zoom: 13,
        center: latLng([this.lat,this.lng]),
        attributionControl: false
      };
      onMapReady(map: Map) {
        this.map = map;
        console.log(this.lat);
        console.log(this.lng);
      }

      onMapClick(event: LeafletMouseEvent) {
        // console.log(event.latlng);
        this.addMarker(event.latlng);
      }


      addMarker(pos: LatLng) {
        const marker = new Marker(pos);
        const anchor = new Point(25 / 2 , 41);
        const icon = new Icon({
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png',
          iconAnchor: anchor,
          shadowAnchor: anchor,
          popupAnchor: new Point(0, -anchor.y)
        });
        marker.setIcon(icon);
        marker.bindPopup('Marker N° ' + (this.markers.length + 1));
        marker.addTo(this.map);
        marker.openPopup();
        this.markers.push(pos);
        this.updateRouting();
      }

      updateRouting() {
        const routing = L.Routing.control({
          waypoints: this.markers,
          routeWhileDragging: true,
          showAlternatives: true
        });
        routing.addTo(this.map);

      }
      onSelectChange(event:any){

        console.log(event.target.value);
        var objToUse = this.groceriesList.find(x=>x.name == event.target.value);
        console.log(objToUse)
        console.log(Number(objToUse.latitude));
        this.addMarker(latLng(Number(objToUse.latitude),Number(objToUse.longitude)));
      }

}
