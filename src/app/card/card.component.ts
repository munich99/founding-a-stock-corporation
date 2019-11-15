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

  setStyles(xx:number) {    
   // console.log(xx);
    if (xx > 2) {
      this.imgWidth=30;
    } else {
      this.imgWidth=50;
    }
    return {"width": this.imgWidth + "%"}
  }


  showClick() {  
    this.repeat.push("element1");  
    this.changeProportion.emit(this.stock);

  }

  constructor() { }

  ngOnInit() {
  }



}
