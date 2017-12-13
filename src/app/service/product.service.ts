import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Product} from "../model/Product";
import {BACKEND_URL} from "../utils";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }
  listProdotti:Array<Product>;
  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(BACKEND_URL + "/product/getListProduct");
  }

  findDisponibili(): Observable<Product[]> {
    return this.http.get<Product[]>(BACKEND_URL + "/product/getListProductDisponibile");
  }

  getUserListProduct(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(BACKEND_URL + "/prodotti/prodottiacquistati");
  }

  getCarrello() {
    if (localStorage.getItem("carrello") == null) {
      this.listProdotti = new Array;
      localStorage.setItem("carrello", JSON.stringify(this.listProdotti))
    } else {
      this.listProdotti = JSON.parse(localStorage.getItem("carrello"))
    }

  }

  addProdotto(prodotto) {
    this.getCarrello()
    this.listProdotti.push(prodotto);
    localStorage.setItem("carrello", JSON.stringify(this.listProdotti))
  }

  deleteCarrello(product): Observable<Product> {
    this.getCarrello()
    for (let cell of this.listProdotti) {
      if (cell.id == product.id) {
        this.listProdotti.splice(this.listProdotti.indexOf(cell), 1)
        localStorage.setItem("carrello", JSON.stringify(this.listProdotti))
        break
      }

    }
    return product;
  }
}
