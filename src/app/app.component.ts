import { Component, Output } from '@angular/core';
import { STOCKS } from '../db-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  


  stockStock = STOCKS[0];
  stockPeople = STOCKS[1];
  stockMoney = STOCKS[2];
}
