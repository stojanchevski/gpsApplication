import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotelsList : Hotel[];
  constructor(private hotelService : HotelService) {}

  ngOnInit() {
    this.getHotels();
  }

    public getHotels(): void {
      this.hotelService.getHotels().subscribe(data =>{
        this.hotelsList = data;}
      );
    }

}
