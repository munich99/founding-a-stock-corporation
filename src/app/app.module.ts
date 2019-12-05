import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { MyCountService } from '../app/my-count.service'
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

@NgModule({
   declarations: [
      AppComponent,
      CardComponent,
      HeaderComponent,
      ContentComponent
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
