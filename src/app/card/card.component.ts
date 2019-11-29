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

  @Output()
  changeProportion = new EventEmitter();

  repeat: any;  
  
  count:number=1;

  aktienZahl:boolean= false;


  showClick(bill:string) {  
    if (bill  == "more" && this.stock.category == "Stocks") {        
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
    // this.changeProportion.emit(this.stock); 
    // console.log(this.stock.category) 
    
    if (bill  == "more" && this.stock.category == "Price") {
      this.count = this.count +1;
      this.aktienZahl = true;

    }
  }

  constructor() {    
   }

  ngOnInit() {
    this.repeat = [ this.altern ];   
  }
}
