import { Component, OnInit } from '@angular/core';
import { gasStation } from '../models/gasStation';
import { GasStationService } from '../services/gas-station.service';

@Component({
  selector: 'app-oils',
  templateUrl: './oils.component.html',
  styleUrls: ['./oils.component.css']
})
export class OilsComponent implements OnInit {

  stationsList : gasStation[];
  constructor(private gasStaionService : GasStationService) {}

  ngOnInit() {
    this.getStations();
  }

    public getStations(): void {
      this.gasStaionService.getStations().subscribe(data =>{
        this.stationsList = data;}
      );
    }

}
