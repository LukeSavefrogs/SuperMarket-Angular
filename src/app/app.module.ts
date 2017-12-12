import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import {ProductService} from "./service/product.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatList, MatListItem, MatListModule} from "@angular/material";
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {LoginService} from "./service/login.service";


@NgModule({
  declarations: [
    AppComponent,
    ListaProdottiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [ProductService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
