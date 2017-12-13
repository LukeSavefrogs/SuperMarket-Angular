import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";
import {Category} from "../model/Category";
import {Unita} from "../model/Unita";
import {MatDialog} from "@angular/material";
import {ProductDetailsComponent} from "../product-details/product-details.component";

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css']
})
export class ListaProdottiComponent implements OnInit {
  category = Category;
  listaProdotti: Product[] = new Array<Product>();
  listaDisponibili: Product[] = new Array<Product>();
  selected: Product = new Product()

  constructor(private service: ProductService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getList();
    this.getDisponibili();
  }

  getList(){
    this.service.findAll().subscribe(data =>{
      this.listaProdotti = data;
      console.log("Prodotti: ", data);
    }, e => console.log(e))
  }

  getDisponibili(){
    this.service.findDisponibili().subscribe(data =>{
      this.listaDisponibili = data;
      console.log("Prodotti: ", data);
    }, e => console.log(e))
  }

  openProduct(prodotto){
    this.selected = prodotto;
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      data:{prodotto},
      height: '80%',
      width: '100%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
