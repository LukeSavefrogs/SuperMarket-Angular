import {User} from "./User";
export class CreditCard {
  id: number;
  numero: string;
  scadenza: string;
  ccv: string;
  credito: number;
  user: User;
}
