import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLocationService {
  lat:number = 0;
  lng:number = 0;

  constructor() {
   }
   public getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;

          console.log(this.lat);
          console.log(this.lng);
        }

      },
        (error: GeolocationPositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    debugger;
  }
  public getMyLat():number{
    return this.lat;
  }
  public getMyLng():number{
    return this.lng;
  }
}
