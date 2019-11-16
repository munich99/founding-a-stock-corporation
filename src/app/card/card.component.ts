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

  imgWidth:number;
  descriptionNumbers:number = 1;

  setStyles() {    
   
    if(this.descriptionNumbers > 2)
    return {"width": "20%", "display": "inline"}
  }


  showClick() {  
    this.repeat.push("element1");  
    this.changeProportion.emit(this.stock);
   
    this.descriptionNumbers = this.descriptionNumbers +1;
  }

  constructor() { }

  ngOnInit() {
  }



}
