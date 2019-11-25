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

  @Output()
  changeProportion = new EventEmitter();

  repeat: any = [ "detail" ];  
  
  count:number = 1;

  showClick(bill:string) {  
    if (bill  == "more") {
          this.count = 1;

          for(var i = 0; i < this.repeat.length; ++i){            
              if(this.repeat[i] == "detail") 
              this.count++;
          } 

          console.log(this.repeat.length, "repeat-länge")
          console.log(this.count, "count")

        if (this.count < 5) {
            this.repeat.push("detail");          
          }
          else {
            for(var i = 0; i < 4; ++i){
              this.repeat.pop();    
            }            
            this.repeat.push("retail");
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

    
  }



}
