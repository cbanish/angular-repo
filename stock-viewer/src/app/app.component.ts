import { Component } from '@angular/core';
import { StockService } from './stock.service';
import { QuoteData } from './QuoteData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {

  constructor(private stockService:StockService) { }

  ngOnInit() {
    
  }

  public stockData:QuoteData[];
  public displayCondition:boolean=false;
   
  public getQuotesForUser(user){
    this.stockService.getStockDataForUser(user).subscribe(data => this.stockData=data);
    console.log(this.stockData);
    this.displayCondition=true;
  }
}
