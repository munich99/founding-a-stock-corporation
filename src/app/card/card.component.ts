import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { STOCKS } from '../../db-data';
import { Stock } from '../model/stock';



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

    if (bill  == "more" && this.stock.category == "Price")
      this.count = this.count +1;
    if (bill  == "less" && this.stock.category == "Price" && this.count > 1 )
    this.count = this.count -1;
 
    // this.changeProportion.emit(this.stock);   
    console.log(this.count, "counttt")
  }


  constructor() {    
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

      console.log(this.count, "count")


   
  }
}