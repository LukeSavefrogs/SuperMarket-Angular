import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Transazione} from "../model/Transazione";
import {BACKEND_URL} from "../utils";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TransazioneService {

  constructor(private http: HttpClient) { }
 getListaTransazioni(): Observable<Transazione[]> {
    return this.http.get<Transazione[]>(BACKEND_URL + "/acquistato//getListaProdottiByUserId");
  }
}
