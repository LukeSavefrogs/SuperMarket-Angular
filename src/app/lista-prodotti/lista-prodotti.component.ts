import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../service/product.service";
import {Category} from "../category";
import {Unita} from "../unita";

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

  constructor(private service: ProductService) {
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

  selectProduct(prodotto){
    this.selected = prodotto;
  }
}
