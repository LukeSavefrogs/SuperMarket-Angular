import {Component, Inject, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //@Input() selected: Product = new Product()

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) { }

  ngOnInit() {
    console.log("Prodotto passato a Dettaglio: ", this.data)
  }


}
