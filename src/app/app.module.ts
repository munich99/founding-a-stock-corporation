import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { MyCountService } from '../app/my-count.service'
import { HeaderComponent } from './header/header.component';

@NgModule({
   declarations: [
      AppComponent,
      CardComponent,
      HeaderComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [
      MyCountService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
