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

  status:boolean=false;


    showClick() {
    
    this.repeat.push("element1");


    this.status=!this.status;

    
    console.log(this.status);
    this.changeProportion.emit(this.stock);

  }

  constructor() { }

  ngOnInit() {
  }



}
