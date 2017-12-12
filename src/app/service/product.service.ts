import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Product} from "../product";
import {BACKEND_URL} from "../utils";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(BACKEND_URL + "/product/getListProduct");
  }
  findDisponibili(): Observable<Product[]>{
    return this.http.get<Product[]>(BACKEND_URL + "/product/getListProductDisponibile");
  }


}
