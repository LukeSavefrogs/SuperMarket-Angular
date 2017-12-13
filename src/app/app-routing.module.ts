import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListaProdottiComponent} from "./lista-prodotti/lista-prodotti.component";
import {LoginComponent} from "./login/login.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {RegistrationComponent} from "./registration/registration.component";
import {CarrelloComponent} from "./carrello/carrello.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'lista', component: ListaProdottiComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detail/:id', component: ProductDetailsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'carrello', component: CarrelloComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
