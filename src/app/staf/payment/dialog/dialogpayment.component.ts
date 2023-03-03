import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ApistreamingService } from 'src/app/services/apistreaming.service';
import { Payment } from 'src/app/model/payment';

@Component({
  templateUrl: './dialogpayment.component.html',
})

export class DialogPaymentsComponent implements OnInit{

  public lstStatus: any[] = [];
  public lstMonyhly: any[] = [];
  public lstUsers: any[] = [];

  public price: number = 0;
  public status: number = 0;
  public idmonthly: number = 0;
  public iduser: number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogPaymentsComponent>,
    public apistreaming: ApistreamingService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getStatusPayment();
    this.getMonthly();
    this.getUser();
  }

  close() {
    this.dialogRef.close();
  }

  getStatusPayment() {
    this.apistreaming.getStatus().subscribe(response => {
      if (response.success === 1) {
        this.lstStatus = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    })
  }

  getMonthly() {
    this.apistreaming.getMonthlyPayment().subscribe(response => {
      if (response.success === 1) {
        this.lstMonyhly = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    })
  }

  getUser() {
    this.apistreaming.getUsers().subscribe(response => {
      if (response.success === 1) {
        this.lstUsers = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    })
  }

  addPayment() {
    const payment: Payment = {
      precioPago: this.price,
      idStatus: this.status,
      idMensualidad: this.idmonthly,
      idUsuario: this.iduser
    };
    this.apistreaming.postPayment(payment).subscribe(response => {
      if (response.success === 1) {
        this.dialogRef.close();
        this.snackBar.open("Pago agregado", "", {
          duration: 2000
        });
      }
      else {
        alert("Error: " + response.message);
      }
    });
  }
}