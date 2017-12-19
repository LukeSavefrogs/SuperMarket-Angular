import { Component, OnInit } from '@angular/core';
import {TransazioneService} from "../service/transazione.service";
import {Transazione} from "../model/Transazione";

@Component({
  selector: 'app-transazione',
  templateUrl: './transazione.component.html',
  styleUrls: ['./transazione.component.css']
})
export class TransazioneComponent implements OnInit {
  listaTransazioni: Array<Transazione>= new Array();
  constructor(private transaioneService:TransazioneService) {
    this.getListTransazioni();
  }

  ngOnInit() {
  }
  getListTransazioni() {
    this.transaioneService.getListaTransazioni().subscribe(data => {
      this.listaTransazioni = data;
      console.log("Prodotti: ", data);
    }, e => console.log(e))
  }

}
