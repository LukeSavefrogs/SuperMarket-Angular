import { Component, OnInit } from '@angular/core';
import {CreditCardService} from "../service/credit-card.service";
import {CreditCard} from "../model/CreditCard";

import {MatDialog} from "@angular/material";
import {CreditCardComponent} from "../credit-card/credit-card.component";

@Component({
  selector: 'app-scelta-carta',
  templateUrl: './scelta-carta.component.html',
  styleUrls: ['./scelta-carta.component.css']
})
export class SceltaCartaComponent implements OnInit {

  listaCard: CreditCard[] = new Array<CreditCard>();
  selected: CreditCard = new CreditCard();

  constructor(private service: CreditCardService, public dialog: MatDialog) {
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
  openDialog() {
    const dialogRef=this.dialog.open(CreditCardComponent, {
      height: '80%',
      width: '100%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialogResult',result);
    })
  }
}
