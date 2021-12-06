import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bank } from './bank';

@Injectable({ providedIn: 'root'})
export class BankService {
  private apiServerUrl =environment.apiBaseURL;

  constructor(private http: HttpClient) { }

  public getBanks(): Observable <Bank[]> {
    return this.http.get<Bank[]>('${this.apiServerUrl}/banks')
  }
}
