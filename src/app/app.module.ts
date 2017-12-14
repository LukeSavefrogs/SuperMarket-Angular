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


@NgModule({
  declarations: [
    AppComponent,
    ListaProdottiComponent,
    LoginComponent,
    ProductDetailsComponent,
    RegistrationComponent,
    CarrelloComponent
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
    SharedService,
    InterceptorService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
