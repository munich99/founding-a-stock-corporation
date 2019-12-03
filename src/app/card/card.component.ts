import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { STOCKS } from '../../db-data';
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
  altern:string;
  @Input()
  categories:string;

  @Output()
  changeProportion = new EventEmitter();

  repeat: any;  
  
  count:number;

  aktienZahl:boolean;
  moneyZahl:boolean;


  showClick(bill:string) {  
    if (this.categories == "Stocks"){     

            if (bill  == "more") {

                          this.myCountService.numberStocks ++;
                            
                          this.count = 1;
                          for(var i = 0; i < this.repeat.length; ++i){            
                              if(this.repeat[i] == this.stock.iconUrl) 
                              this.count++;
                          } 

                          if (this.count < 5) {
                              this.repeat.push(this.stock.iconUrl);          
                            }
                          else {
                              for(var i = 0; i < 4; ++i){
                                this.repeat.pop();    
                              }            
                              this.repeat.push(this.stock.iconUrl100);           
                          }                          
                          
            }
            else {
                        this.myCountService.numberStocks --;

                        if (this.repeat[this.repeat.length-1]  == this.stock.iconUrl && this.repeat.length > 1) 
                          this.repeat.pop()  
                        else  { 
                          if (this.repeat == this.stock.iconUrl100) 
                              this.repeat.splice((this.repeat.length-1), 1,
                              this.stock.iconUrl,this.stock.iconUrl,
                              this.stock.iconUrl, this.stock.iconUrl
                              ); }
            }
    }


    if (this.categories == "Price"){
              if (bill  == "more")              
              this.myCountService.numberPrice = this.myCountService.numberPrice + 100;
              if (bill  == "less" && this.myCountService.numberPrice > 100 )
              this.myCountService.numberPrice = this.myCountService.numberPrice - 100;
    }
 
   // this.changeProportion.emit(this.repeat); 
  }

  setStyles() {   
    if(this.repeat.length > 1 && this.repeat.length < 3) 
    return {"width": "50%", "display": "inline", "margin-top":"10px", "margin-bottom":"10px"};

    if(this.repeat.length > 2 && this.repeat.length < 5) 
    return {"width": "25%", "display": "inline", "margin-top":"100px", "margin-bottom":"20px"};

    if(this.repeat.length > 4 && this.repeat.length < 12) 
    return {"width": "20%", "display": "inline", "margin-top":"120px", "margin-bottom":"20px"};
  }

  constructor(private myCountService:MyCountService) {
    // for globals variables
  }

  ngOnInit() {
    this.repeat = [ this.altern ];  
    
    if (this.stock.category == "Price") {
      this.count = 1;
      this.aktienZahl = true;
      }

    if (this.stock.category == "Money") {
      this.count = 1;
      this.moneyZahl = true;
      }
  }
}