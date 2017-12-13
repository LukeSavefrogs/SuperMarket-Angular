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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private prodottoService: ProductService) { }

  ngOnInit() {
    console.log("Prodotto passato a Dettaglio: ", this.data)
  }

  aggiungiProdotto(prod){
    this.prodottoService.addProdotto(prod);
    console.log("Prodotto aggiunto al Carrello: ", prod)
  }
}
