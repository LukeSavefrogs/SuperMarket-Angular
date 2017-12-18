import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import {ProductService} from "./service/product.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatDialogModule, MatGridListModule, MatIcon, MatIconModule, MatListModule, MatMenuModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
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
import { CarrelloComponent } from './carrello/carrello.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import {CreditCardService} from "./service/credit-card.service";
import { SceltaCartaComponent } from './scelta-carta/scelta-carta.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaProdottiComponent,
    LoginComponent,
    ProductDetailsComponent,
    RegistrationComponent,
    CarrelloComponent,
    CreditCardComponent,
    SceltaCartaComponent,

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
    MatIconModule,
    MatTooltipModule
    ],

  providers: [
    ProductService,
    LoginService,
    CreditCardService,
    SharedService,
    AuthGuardService,
    InterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
