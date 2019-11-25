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

  repeat: any = [ "erstes" ];   

  show(indexNummer:number){    
   if(((indexNummer+1) % 5 ) == 0)
          {
            return true;
            }
  }


  showDetail(indexNummer:number){  

    if( this.repeat.length < 5 || this.repeat.length >7)   
      return true;
 
  }

  setStyles() {  
    if(this.repeat.length > 1 && this.repeat.length <5 )
        return {"width": "50%", "display": "inline"};
      
      if(this.repeat.length >= 5 ) 
        return {"width": "25%", "display": "inline"};
  }
 

  showClick(bill:string) {  
    if (bill  == "more") {
      this.repeat.push(this.stock.description)
      // hier ein normales if
      
        
    }
    else {

      if (bill  == "less" && this.repeat.length > 1) {      
          this.repeat.pop()      
      }
    }

    this.changeProportion.emit(this.stock);
   
  }

  constructor() { }

  ngOnInit() {
  }



}
