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

  //unused code removed

}
