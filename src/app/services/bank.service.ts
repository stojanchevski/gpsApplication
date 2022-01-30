import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../models/bank';

@Injectable({ providedIn: 'root'})
export class BankService {
  private apiServerUrl ="http://localhost:8080/banks";

  constructor(private http: HttpClient) { }

  public getBanks(): Observable <Bank[]> {
    return this.http.get<Bank[]>(`${this.apiServerUrl}`);
  }
}
