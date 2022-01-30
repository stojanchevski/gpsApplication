import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, LatLng, Map, Marker, Icon, Point } from 'leaflet';
import { Bank } from '../models/bank';
import { BankService } from '../services/bank.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';


@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit, OnChanges {


  banksList:Bank[];
  selectedBank:string = "";
  constructor(private bankService : BankService) {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    this.getBanks();
    this.getLocation();
  }

    public getBanks(): void {
      this.bankService.getBanks().subscribe(data =>{
        this.banksList = data;}
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
      var objToUse = this.banksList.find(x=>x.name == event.target.value);
      console.log(objToUse)
      console.log(Number(objToUse.latitude));
      this.addMarker(latLng(Number(objToUse.latitude),Number(objToUse.longitude)));
    }




}
