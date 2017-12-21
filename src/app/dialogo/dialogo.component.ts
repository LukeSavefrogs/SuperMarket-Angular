import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {CreditCard} from "../model/CreditCard";
import {ProductService} from "../service/product.service";
import {Location} from "@angular/common";
import {DialogSuccessComponent} from "../dialog-success/dialog-success.component";
import {Router} from "@angular/router";
@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {  //conferma d'acquisto (si/no)
  carta:CreditCard=new CreditCard;
  constructor(private dialogRef: MatDialogRef<DialogoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,private productService:ProductService,private location:Location,public dialogSuccess: MatDialog,private router:Router) { }

  ngOnInit() {
    this.carta=this.data.carta

  }

  compraProdotti() {
    console.log(this.data)
    this.productService.compraProdotti(this.productService.getCarrello(),this.carta.id).subscribe(dat => {
      this.productService.cleanCarrello();
      this.closedDialog();
      this.openDialogoCard()
      console.log(dat);
    }, err => {
      console.log(err);
    })
  }
  closedDialog() {
    this.dialogRef.close();


  }
  openDialogoCard() {
    const dialogRef = this.dialogSuccess.open(DialogSuccessComponent, {

      height: '20%',
      width: '30%'
    });
    dialogRef.afterClosed().subscribe(result => {  //da dialos success riparte da qua e ti rimanda alla lista prodotti
      console.log(`Dialog result: ${result}`);
      this.router.navigate(['lista'])

    });
  }
}
