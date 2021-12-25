import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public start: string;
  public finish: string;
  title: any;

  public constructor() {
      this.start = "37.7397,-121.4252";
      this.finish = "37.6819,-121.7680";
  }

  public ngOnInit():void{
    // this.getLocation();
  }


  // getLocation(){
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
  //       if (position) {
  //         console.log("Latitude: " + position.coords.latitude +
  //           "Longitude: " + position.coords.longitude);
  //         this.lat = position.coords.latitude;
  //         this.lng = position.coords.longitude;
  //         console.log(this.lat);
  //         console.log(this.lat);
  //       }
  //     },
  //       (error: GeolocationPositionError) => console.log(error));
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }

  // }

}
