import {Component, OnInit} from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";
import {Category} from "../model/Category";
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
  selected: Product = new Product();
  lista: boolean = true; //solo x grafica

  constructor(private service: ProductService, public dialog: MatDialog) {
    this.generaOfferte()
  }

  ngOnInit() {
    this.getList();
    this.getDisponibili();
  }

  generaOfferte() {
    this.service.generaOfferte().subscribe(data =>
      console.log(data),
        e => console.log(e)
    )
  }

  getList() {
    this.service.findAll().subscribe(data => {
      this.listaProdotti = data;
      console.log("Prodotti: ", data);
    }, e => console.log(e))
  }

  getDisponibili() {
    this.service.findDisponibili().subscribe(data => {
      this.listaDisponibili = data;
      // console.log("Prodotti: ", data);
    }, e => console.log(e))
  }

  openProduct(prodotto) {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: {prodotto},
      height: '80%',
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  setListaMod(param: boolean) {
    this.lista = param;
  }

  getSelected(selezionato) {
    // console.log(selezionato)
    let lista: Array<Product> = new Array();
    let prodottoCercato: Product = new Product();

    this.service.findAll().subscribe(data => {
      // console.log(data)
        lista= data;

      for (let prod of lista) {
        // console.log("FOR")
        if (prod.id == selezionato.id) {
          // console.log(prod,selezionato)
          prodottoCercato = prod
          // console.log(prodottoCercato)
        }
      }
        this.openProduct(prodottoCercato);
      }, e => {
        console.log(e)
      }
    )
  }
}
