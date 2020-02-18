import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeerComponent } from './component/beer/beer.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
