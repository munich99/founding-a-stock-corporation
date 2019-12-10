import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';

import { CURRENCY } from '../../db-currency';
import { Currency } from '../model/currency';

import { Stock } from '../model/stock';

import { MyCountService } from '../my-count.service';





@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() 
  stock:Stock;
  @Input()
  categories:string;

  @Output()
  changeProportion = new EventEmitter();

  repeat: any;  
  
  count:number;

  widthSmaller:string;

  aktienZahl:boolean;
  moneyZahl:boolean;

  currency:Currency=CURRENCY;

  // stock:Stock=STOCKS;
  
  
  onChange(deviceValue:string) {

    this.myCountService.myCurrency = deviceValue // * this.currency.currencyRate;
    this.myCountService.numberPrice = this.myCountService.numberPrice // *2;    
 
  }

  showClick(bill:string) {     
    if (this.categories == "Stocks"){   
            if (bill  == "more") {

                          this.myCountService.numberStocks ++;
                          this.repeat = [];

                          let repeatBigImg:number = this.myCountService.numberStocks / 10;
                          let repeatSmallImg:number = this.myCountService.numberStocks % 10;

                          for(var i = 1; i <= repeatBigImg; ++i)
                            this.repeat.push(this.stock.iconUrl100);                         

                          for(var i = 0; i < repeatSmallImg; ++i)                            
                            this.repeat.push(this.stock.iconUrl);  
            } 
            
            if (bill  == "less" && this.myCountService.numberStocks > 1) {
                        this.myCountService.numberStocks --;

                        if (this.repeat[this.repeat.length-1]  == this.stock.iconUrl && this.repeat.length > 1) 
                          this.repeat.pop()  

                        if (this.repeat[this.repeat.length-1] == this.stock.iconUrl100){
                          this.repeat.pop();
                          for(var i = 1; i <=9; ++i)
                          this.repeat.push(this.stock.iconUrl);
                        }
            }
    }


    if (this.categories == "Price"){
              if (bill  == "more")              
              this.myCountService.numberPrice = this.myCountService.numberPrice + 100;
              if (bill  == "less" && this.myCountService.numberPrice > 100 )
              this.myCountService.numberPrice = this.myCountService.numberPrice - 100;
    }

   /* if (this.categories == "Money"){
      if (bill  == "more")              
      this.myCountService.numberStocks = this.myCountService.numberStocks + 1;
      if (bill  == "less" && this.myCountService.numberPrice > 100 )
      this.myCountService.numberPrice = this.myCountService.numberPrice - 100;
    }
    */
 
   // this.changeProportion.emit(this.repeat); 
  }

  setStyles() {   

   if (this.categories == "Stocks" && this.repeat.length>1){   
      
      let widthSmallerSource = this.repeat.length % 10;      
     
      this.widthSmaller = 100/widthSmallerSource + "%"; 

      if (this.repeat.length<10)
      return {"width": this.widthSmaller} 
      else
      return {"width":"10%"} 
    }
  }

  constructor(private myCountService:MyCountService) {
    // for globals variables
  }

  ngOnInit() {   
    this.repeat = [ this.stock.iconUrl ];  
    
    if (this.stock.category == "Price")      
      this.aktienZahl = true; 
    if (this.stock.category == "Money")     
      this.moneyZahl = true; 
      
    console.log(this.currency, "dsafasf")
  }
}