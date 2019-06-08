import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuoteData } from './QuoteData';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }

  private url="http://localhost:8070/api/stock-service/rest/stock/";

  getStockDataForUser(username:String) : Observable<QuoteData[]>{

    return this.http.get<QuoteData[]>(this.url+username);
  }
}
