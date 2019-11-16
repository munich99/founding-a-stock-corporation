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
 

  setStyles() {   

    if(this.repeat.length > 1 ) {
      if(this.repeat.length < 5 ) {
        return {"width": "50%", "display": "inline"};
      } 
      if(this.repeat.length > 4 ) {
        return {"width": "25%", "display": "inline"};
      }
    }


  }
 

  showClick() {  
    this.repeat.push("element1");  
    this.changeProportion.emit(this.stock);
   
    
    console.log(this.repeat.length);
  }

  constructor() { }

  ngOnInit() {
  }



}
