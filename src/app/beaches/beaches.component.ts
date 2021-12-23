import { Component, OnInit } from '@angular/core';
import { Beach } from '../models/beach';
import { BeachService } from '../services/beach.service'

@Component({
  selector: 'app-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.css']
})
export class BeachesComponent implements OnInit {

  beachesList : Beach[];
  constructor(private beachService : BeachService) {}

  ngOnInit() {
    this.getBeaches();
  }

    public getBeaches(): void {
      this.beachService.getBeaches().subscribe(data =>{
        this.beachesList = data;}
      );
    }

}
