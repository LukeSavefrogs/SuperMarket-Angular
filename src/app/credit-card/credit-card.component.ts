import { Component, OnInit } from '@angular/core';
import {CreditCard} from "../model/CreditCard";
import {CreditCardService} from "../service/credit-card.service";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  listaCard: CreditCard[] = new Array<CreditCard>();
  selected: CreditCard = new CreditCard();

  constructor(private service: CreditCardService, private dialogRef: MatDialogRef<CreditCardComponent>) { }

  ngOnInit() {
  }
  getListCardUser(){
    this.service.getListCardUser().subscribe(data => {
      this.listaCard = data;
      console.log("Carte: ", data);
    }, err =>{
      console.log(err);
    })
  }
    addCard() {
      this.service.addCard(this.addCard()).subscribe(data => {
        console.log(data);
        this.closedDialog();
      }, err => {
        console.log(err);
      })
    }
    deleteCard(creditCard){
      console.log(creditCard)
      this.service.deleteCreditCard(creditCard).subscribe(data => {
        this.getListCardUser()
        console.log(data);
      }, err => {
        console.log(err);
      })
    }
    closedDialog() {
      this.dialogRef.close();
    }
    }



