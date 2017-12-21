import { Component, OnInit } from '@angular/core';
import {CreditCardService} from "../service/credit-card.service";
import {CreditCard} from "../model/CreditCard";
import {MatDialog} from "@angular/material";


import {CreditCardComponent} from "../credit-card/credit-card.component";
import {ProductService} from "../service/product.service";
import {DialogoComponent} from "../dialogo/dialogo.component";



@Component({
  selector: 'app-scelta-carta',
  templateUrl: './scelta-carta.component.html',
  styleUrls: ['./scelta-carta.component.css']
})
export class SceltaCartaComponent implements OnInit {

  listaCard: CreditCard[] = new Array<CreditCard>();
  selected: CreditCard = new CreditCard();

  constructor(private service: CreditCardService, public dialog: MatDialog,private productService: ProductService, public dialogo: MatDialog,) {
  }

  ngOnInit() {
    this.getListCardUser();
  }


  compraProdotti(carta) {
    this.productService.compraProdotti(this.productService.getCarrello(),carta.id).subscribe(data => {
      this.productService.cleanCarrello();
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

  getListCardUser() {
    this.service.getListCardUser().subscribe(data => {
      this.listaCard = data;
      console.log("Carte: ", data);
    }, err => {
      console.log(err);
    })
  }

  openDialogCard() {
    const dialogRef = this.dialog.open(CreditCardComponent, {
      height: '80%',
      width: '100%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getListCardUser()
    });
  }

openDialogoCard(carta) {
  const dialogRef = this.dialogo.open(DialogoComponent, {
    data: {carta},
    height: '20%',
    width: '30%'
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);

  });
}
}
