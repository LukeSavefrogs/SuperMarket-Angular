import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListaProdottiComponent} from "./lista-prodotti/lista-prodotti.component";
import {LoginComponent} from "./login/login.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {RegistrationComponent} from "./registration/registration.component";
import {CarrelloComponent} from "./carrello/carrello.component";
import {CreditCardComponent} from "./credit-card/credit-card.component";
import {SceltaCartaComponent} from "./scelta-carta/scelta-carta.component";
import {TransazioneComponent} from "./transazione/transazione.component";

const routes: Routes = [
  {path: '', redirectTo: '/lista', pathMatch: 'full'},
  {path: 'lista', component: ListaProdottiComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detail/:id', component: ProductDetailsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'carrello', component: CarrelloComponent},
  {path: 'creditCard', component: CreditCardComponent},
  {path: 'sceltaCarta', component: SceltaCartaComponent},
  {path: 'transazioni', component: TransazioneComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
