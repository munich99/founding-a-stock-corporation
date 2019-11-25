import { Component, Output, NgModule } from '@angular/core';
import { STOCKS } from '../db-data';
import { Stock } from './model/stock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  countnumber="../../assets/stockpaper.png";

  stock:Stock=STOCKS;
  
  
  onChangeProportion(xx:Stock){

  // console.log(xx)
  }

}
