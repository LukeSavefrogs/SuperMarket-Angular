import {Component, Inject, Input, OnInit} from '@angular/core';
import {Product} from "../model/Product";
import {MAT_DIALOG_DATA} from "@angular/material";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //@Input() selected: Product = new Product()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private prodottoService: ProductService) {
  }
  prodottoDaCarrello: Product;
  compra: number;

  ngOnInit() {
    console.log("Prodotto passato a Dettaglio: ", this.data)
    this.getCarrello(this.data.prodotto)
    console.log("Prodotto nel carrello: ", this.prodottoDaCarrello)
    this.compra = this.prodottoDaCarrello.quantitaDaAcquistare
    console.log(this.compra)
    //console.log("Preso:", this.data.prodotto.)
  }

  aggiungiProdotto(prod) {
    this.compra++
    this.prodottoService.addProdotto(prod);
    this.getCarrello(prod);
    console.log("Prodotto aggiunto al Carrello: ", prod)
  }

  aggiungi(numCompra) {

  }

  rimuovi(prod) {
    this.prodottoService.deleteOne(prod);
  }

  roundNumber(num) {
    return this.prodottoService.roundNumber(num);
  }

  getCarrello(prodotto) {
    this.prodottoService.getOnefromCarrello(prodotto).subscribe(data => {
      this.prodottoDaCarrello = data
      console.log(this.prodottoDaCarrello)
    }, e => console.log(e))
  }
}
