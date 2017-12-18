import {Component, Inject, Input, OnInit} from '@angular/core';
import {Product} from "../model/Product";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //@Input() selected: Product = new Product()

  constructor(private dialogRef: MatDialogRef<ProductDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private prodottoService: ProductService,
              private router: Router) {
  }

  prodottoDaCarrello: Product;
  compra: number;
  loggedUser;
  toggle: boolean

  ngOnInit() {
    //console.log("Prodotto passato a Dettaglio: ", this.data)
    this.getCarrello(this.data.prodotto)
    console.log("Prodotto nel carrello: ", this.prodottoDaCarrello)
    this.compra = this.prodottoDaCarrello.quantitaDaAcquistare
    console.log(this.compra)
    this.loggedUser = JSON.parse(localStorage.getItem('user'))
    //console.log("Preso:", this.data.prodotto.)
  }

  aggiungiProdotto(prod) {
    if(this.compra == undefined) this.compra = 1
    else this.compra++
    this.prodottoService.addProdotto(prod);
    this.getCarrello(prod);
    this.toggle = false
    console.log("Prodotto aggiunto al Carrello: ", prod)
  }

  faiLoggare() {
    this.router.navigate(['login']);
    this.dialogRef.close();
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
      // console.log(this.prodottoDaCarrello)
    }, e => console.log(e))
  }

  aggiungiQuantita(quant, prodotto){
    console.log("Quantita: ", this.compra)
    console.log("Quantita già presente: ", this.prodottoDaCarrello.quantitaDaAcquistare)
    this.prodottoService.compraQuantita(quant, prodotto)
    this.getCarrello(prodotto);
    this.toggle = false
    console.log("Nuova quantita: ", this.prodottoDaCarrello.quantitaDaAcquistare)
  }
}
