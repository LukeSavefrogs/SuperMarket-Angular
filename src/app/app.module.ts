import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import {ProductService} from "./service/product.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatDialogModule, MatGridListModule, MatListModule, MatMenuModule, MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./service/login.service";
import {SharedService} from "./service/shared.service";
import {InterceptorService} from "./service/interceptor.service";
import {AuthGuardService} from "./service/auth-guard.service";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {FormsModule} from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProdottiComponent,
    LoginComponent,
    ProductDetailsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,

  ],
  providers: [
    ProductService,
    LoginService,
    SharedService,
    InterceptorService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
