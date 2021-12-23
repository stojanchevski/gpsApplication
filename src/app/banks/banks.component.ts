import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Bank } from '../models/bank';
import { BankService } from '../services/bank.service';


@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  banksList:Bank[];
  constructor(private bankService : BankService) {}
  ngOnInit() {
    this.getBanks();
  }

    public getBanks(): void {
      this.bankService.getBanks().subscribe(data =>{
        this.banksList = data;}
      );
    }
    // selected = "----"
    // update(e){
    //   this.selected = e.target.value
    // }

}
