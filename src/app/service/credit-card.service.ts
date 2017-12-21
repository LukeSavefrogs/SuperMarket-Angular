import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {CreditCard} from "../model/CreditCard";
import {Observable} from "rxjs/Observable";
import {BACKEND_URL} from "../utils";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'})
};

@Injectable()
export class CreditCardService {

  constructor(private http: HttpClient) { }

  getListCardUser(): Observable<Array<CreditCard>>{
    return this.http.get<Array<CreditCard>>(BACKEND_URL + "/creditCard/getCardUser");
  }
  addCard(creditCard): Observable<CreditCard>  {
    console.log("sono nel service: "+ creditCard)
    return this.http.post<CreditCard>(BACKEND_URL + "/creditCard/addCartaCredito",creditCard, httpOptions); // quando c'è il request body sul server aggiungere alla chiamata il body (in questo caso credit card)
  }
  deleteCreditCard(creditCard): Observable<CreditCard> {
    return this.http.delete<CreditCard>(BACKEND_URL + "/creditcard/deletecard/" + creditCard.id);
  }
}

