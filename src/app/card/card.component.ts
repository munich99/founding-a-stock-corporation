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
  
  count:number = 1;


  showClick(bill:string) {  
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
            console.log(this.repeat, "ganzes stück")
          }
    }
    else {
      if (bill  == "less" && this.repeat.length > 1) {      
          this.repeat.pop()      
      }
    }
    // this.changeProportion.emit(this.stock);
   
  }

  constructor() {    
   }

  ngOnInit() {
    this.repeat = [ this.altern ];   
  }
}
