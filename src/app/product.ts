import DateTimeFormat = Intl.DateTimeFormat;
import {Category} from "./category";

export class Product {
  id: number;
  nome: string;
  marca: string;
  dataScadenza: Date;
  categoria: Category;
  quantitaDisponibile: number;
  quantitaDaAcquistare: number;
  unità: Unita;
  prezzoUnitario: number;
  prezzoSenzaIva: number;
  prezzoIvato: number;
  img: string;
  offerta: number;
}
