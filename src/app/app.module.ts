import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import {ProductService} from "./service/product.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatGridListModule, MatListModule, MatTabsModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    ListaProdottiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
