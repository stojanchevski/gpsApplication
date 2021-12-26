import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { gasStation } from '../models/gasStation';
import { GasStationService } from '../services/gas-station.service';
import { Hotel } from '../models/hotel';
import { HotelService } from '../services/hotel.service';
import { Beach } from '../models/beach';
import { BeachService } from '../services/beach.service'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, LatLng, Map, Marker, Icon, Point } from 'leaflet';
import { HereMapComponent } from '../here-map/here-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { MyLocationService } from '../services/my-location.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restauranrsList : Restaurant[];

  constructor(private restaurantService : RestaurantService) {}

  ngOnInit() {
    this.getRestaurants();
    this.getLocation();
  }

    public getRestaurants(): void {
      this.restaurantService.getRestaurants().subscribe(data =>{
        this.restauranrsList = data;}
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
        this.restaurantService.getRestaurants().subscribe(data =>{
          this.restauranrsList = data;}
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
        var objToUse = this.restauranrsList.find(x=>x.name == event.target.value);
        console.log(objToUse)
        console.log(Number(objToUse.latitude));
        this.addMarker(latLng(Number(objToUse.latitude),Number(objToUse.longitude)));
      }

}
