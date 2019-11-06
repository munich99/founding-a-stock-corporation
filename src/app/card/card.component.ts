import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }
  /*alert("ee");
  console.log("22");*/
}
