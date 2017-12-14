import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  listProduct: Array<Product>= new Array();
  constructor(private productServices: ProductService) {

  }

  ngOnInit() {
    this.getCarrello()
  }

  getUserListProduct(){
    this.productServices.getUserListProduct().subscribe(data => {
      this.listProduct = data;
      console.log(this.listProduct);
    }, err=>{
      console.log(err);
    })
  }

  getCarrello(){
    this.listProduct=JSON.parse(localStorage.getItem("carrello"))
    console.log("CARRELLO - Carrello:", this.listProduct) //FUNZIONA
  }

  delete(product){
    console.log(product)
    this.productServices.deleteCarrello(product).subscribe(data => {
      this.getCarrello()
      console.log(data);
    }, err=>{
      console.log(err);
    })
  }

  reduce(product){
    console.log(product)
  }

}
