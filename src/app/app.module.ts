import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import {ProductService} from "./service/product.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatDialogModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatTabsModule,
  MatButtonToggleModule,
  MatIcon,
  MatToolbarModule, MatTooltipModule, MatTableModule, MatCardModule, MatCardContent, MatInputModule,
  MatRadioModule
} from "@angular/material";
import {MatExpansionModule} from '@angular/material/expansion';
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
import { TransazioneComponent } from './transazione/transazione.component';
import {TransazioneService} from "./service/transazione.service";
import { DialogoComponent } from './dialogo/dialogo.component';
import { DialogSuccessComponent } from './dialog-success/dialog-success.component';


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
    TransazioneComponent,
    DialogoComponent,
    DialogSuccessComponent,

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
    MatTooltipModule,
    MatExpansionModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule
  ],

  providers: [
    ProductService,
    LoginService,
    CreditCardService,
    SharedService,
    AuthGuardService,
    InterceptorService,
    TransazioneService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
