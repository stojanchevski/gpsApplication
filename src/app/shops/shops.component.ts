import { Component, OnInit } from '@angular/core';
import { Grocery } from '../models/grocery';
import { GroceryService } from '../services/grocery.service';

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
  }

    public getGroceries(): void {
      this.groceryService.getGroceries().subscribe(data =>{
        this.groceriesList = data;}
      );
    }

}
