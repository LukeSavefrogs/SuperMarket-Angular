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
  selected: Product = new Product()

  constructor(private service: ProductService) {
    this.listaProdotti = [
      {id: 1, nome: "Latte", categoria: Category.ALIMENTI, dataScadenza: "17/4/2018", marca: "Centrale del Latte",
        offerta:0, prezzoIvato: 2.50, prezzoSenzaIva: 2.00, prezzoUnitario: 0.4, quantitaDaAcquistare: null,
        quantitaDisponibile: 90, unità: Unita.LITRO,
        img:"https://www.granarolo.it/system/granarolo_consumer/attachments/data/000/002/255/original/Latte_parzialmente_scremato_Accadi_Senza_Lattosio_1L.jpg?1490970934"
      },
      {id: 2, nome: "Carne di Drago", categoria: Category.ALIMENTI, dataScadenza: "9/9/9999", marca: "Radiant Farms",
        offerta:0, prezzoIvato: 15000, prezzoSenzaIva: 10000, prezzoUnitario: 900, quantitaDaAcquistare: null,
        quantitaDisponibile: 5, unità: Unita.CHILO,
        img:"https://images-na.ssl-images-amazon.com/images/I/51qGYooFtiL.jpg"
      },
      {id: 3, nome: "Caffè Lavazza qualità Oro", categoria: Category.ALIMENTI, dataScadenza: "6/1/2018", marca: "Lavazza",
        offerta:0, prezzoIvato: 5, prezzoSenzaIva: 4.60, prezzoUnitario: 1, quantitaDaAcquistare: null,
        quantitaDisponibile: 124, unità: Unita.CHILO,
        img:"https://hairshop.lv/content/images/thumbs/0018308_lavazza-qualita-oro-kafijas-pupinas-1-kg.jpeg"
      },
      {id: 4, nome: "Pane di Segale", categoria: Category.ALIMENTI, dataScadenza: "21/8/2018", marca: "Gilli",
        offerta:0, prezzoIvato: 3, prezzoSenzaIva: 2.5, prezzoUnitario: 0.2, quantitaDaAcquistare: null,
        quantitaDisponibile: 43, unità: Unita.CHILO,
        img:"http://www.laviticella.it/shop/1465-tm_large_default/rye-bread-landbrot-gilli-500-gr.jpg"
      },
      {id: 4, nome: "Fusilli 5 Cereali", categoria: Category.ALIMENTI, dataScadenza: "5/2/2020", marca: "Barilla",
        offerta:0, prezzoIvato: 3.20, prezzoSenzaIva: 1.60, prezzoUnitario: 1, quantitaDaAcquistare: null,
        quantitaDisponibile: 187, unità: Unita.PEZZO,
        img:"http://www.giallozafferano.it/images/barilla/ingredienti/i-Fusilli-5-cereali_package_medium.jpg"
      },
      {id: 5, nome: "Omino Bianco Essenza Muschio Bianco", categoria: Category.PRODOTTI_CASA, dataScadenza: "10/9/2080", marca: "Omino Bianco",
        offerta:2, prezzoIvato: 4.30, prezzoSenzaIva: 2.50, prezzoUnitario: 4, quantitaDaAcquistare: null,
        quantitaDisponibile: 200, unità: Unita.PEZZO,
        img:"https://images-na.ssl-images-amazon.com/images/I/818D%2BZFqWdL._SL1500_.jpg"
      },
      {id: 6, nome: "Pril Perfect-Gel Express Power", categoria: Category.PRODOTTI_CASA, dataScadenza: "5/2/2020", marca: "Barilla",
        offerta:0, prezzoIvato: 4, prezzoSenzaIva: 3.2, prezzoUnitario: 2, quantitaDaAcquistare: null,
        quantitaDisponibile: 324, unità: Unita.PEZZO,
        img:"http://www.delfofirenze.it/wp-content/uploads/2016/12/pril-gel.jpg"
      },
      {id: 7, nome: "Kérastase Paris", categoria: Category.PRODOTTI_PERSONA, dataScadenza: "21/8/2018", marca: "Paris",
        offerta:0, prezzoIvato: 4.20, prezzoSenzaIva: 2, prezzoUnitario: 3, quantitaDaAcquistare: null,
        quantitaDisponibile: 30, unità: Unita.PEZZO,
        img:"https://s4.thcdn.com/productimg/960/960/11309649-5684484572839147.jpg"
      },
      {id: 8, nome: "L'Oreal Paris Colour Protect", categoria: Category.PRODOTTI_PERSONA, dataScadenza: "5/2/2020", marca: "Paris",
        offerta:0, prezzoIvato: 5.90, prezzoSenzaIva: 4.80, prezzoUnitario: 4, quantitaDaAcquistare: null,
        quantitaDisponibile: 61, unità: Unita.PEZZO,
        img:"https://www.ocado.com/productImages/269/26965011_0_640x640.jpg?identifier=440a631c3a07cb7426937a3dbcb393a0"
      },
      {id: 9, nome: "Biscotti per Cani \"Amici Speciali\"", categoria: Category.ANIMALI, dataScadenza: "10/9/2019", marca: "Coop",
        offerta:20, prezzoIvato: 5.60, prezzoSenzaIva: 5, prezzoUnitario: 4.30, quantitaDaAcquistare: null,
        quantitaDisponibile: 150, unità: Unita.PEZZO,
        img:"http://www.coopfirenze.it/uploads/22372/original/14_animali_coop.jpg"
      },
      {id: 10, nome: "Purina One Adult", categoria: Category.ANIMALI, dataScadenza: "9/7/2021", marca: "Purina",
        offerta:0, prezzoIvato: 7.0, prezzoSenzaIva: 6.80, prezzoUnitario: 6, quantitaDaAcquistare: null,
        quantitaDisponibile: 101, unità: Unita.PEZZO,
        img:"https://images-na.ssl-images-amazon.com/images/I/917%2BYnoduaL._SL1500_.jpg"
      },
    ]
  }

  ngOnInit() {
    //this.getList()
  }

  getList(){
    this.service.findAll().subscribe(data =>{
      this.listaProdotti = data;
      console.log("Prodotti: ", data);
    }, e => console.log(e))
  }

  selectProduct(prodotto){
    this.selected = prodotto;
  }
}
