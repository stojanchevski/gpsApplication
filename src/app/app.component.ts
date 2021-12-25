import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // public start: string;
  // public finish: string;
  title: any;
  lat:number ;
  lng:number=0;

  public constructor() {
     this.lat = 0;
     this.lng = 0;
  }

  // public ngOnInit():void{
  //    this.getLocation();
  // }


  // public getLocation(){
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
  //       if (position) {
  //         console.log("Latitude: " + position.coords.latitude +
  //           "Longitude: " + position.coords.longitude);
  //         this.lat = position.coords.latitude;
  //         this.lng = position.coords.longitude;
  //         console.log(this.lat);
  //         console.log(this.lng);
  //       }
  //     },
  //       (error: GeolocationPositionError) => console.log(error));
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }

  // }

}
