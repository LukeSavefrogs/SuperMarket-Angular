import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";
import {MatDialog, TooltipPosition} from "@angular/material";
import {CreditCard} from "../model/CreditCard";

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  listProduct: Array<Product> = new Array();
  totale: number = 0;
  position: string = 'below';
  selected: CreditCard = new CreditCard();

  constructor(private productServices: ProductService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getCarrello()
  }

  getCarrello() {
    this.listProduct = JSON.parse(localStorage.getItem("carrello"))
    this.getTotale()
    console.log("CARRELLO - Carrello:", this.listProduct) //FUNZIONA
  }

  delete(product) {
    console.log(product)
    this.productServices.deleteCarrello(product).subscribe(data => {

      this.getCarrello()
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

  reduce(product) {
    console.log(product)
    this.productServices.deleteOne(product).subscribe(
      data => {
        this.getCarrello();
        console.log("Nuovo prodotto: ", product)
      }, err => {
        console.log(err);
      })
  }

  getTotale() {
    this.totale = 0
    for (let prodotto of this.listProduct) this.totale += (prodotto.prezzoScontato * prodotto.quantitaDaAcquistare)
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../assets/Sounds/WINDOWS_XP_ERROR_SOUND.mp3";
    audio.load();
    audio.play();
  }
}
