import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';

import {MatCardModule} from '@angular/material';

import {AngularFittextModule} from 'angular-fittext';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    AngularFittextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
