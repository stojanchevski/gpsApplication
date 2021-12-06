import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank';
import { BankService } from '../bank.service';


@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  public banksList: Bank[] = [];
  constructor(private bankService : BankService) {}

    public getBanks(): void {
      this.bankService.getBanks().subscribe(
        (response : Bank[] )=>{
          this.banksList = response;
        }
      );
    }
    ngOnInit() {
      this.getBanks();
    }
}
