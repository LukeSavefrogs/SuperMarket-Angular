import { Component, OnInit } from '@angular/core';
import {CreditCardService} from "../service/credit-card.service";
import {CreditCard} from "../model/CreditCard";

@Component({
  selector: 'app-scelta-carta',
  templateUrl: './scelta-carta.component.html',
  styleUrls: ['./scelta-carta.component.css']
})
export class SceltaCartaComponent implements OnInit {

  listaCard: CreditCard[] = new Array<CreditCard>();
  selected: CreditCard = new CreditCard();

  constructor(private service: CreditCardService) {
  }

  ngOnInit() {
  }

  getListCardUser() {
    this.service.getListCardUser().subscribe(data => {
      this.listaCard = data;
      console.log("Carte: ", data);
    }, err => {
      console.log(err);
    })
  }
}
