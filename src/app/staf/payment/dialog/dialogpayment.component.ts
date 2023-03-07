import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
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

  public id: string = "";
  public price: number = 0;
  public status: number = 0;
  public idmonthly: number = 0;
  public iduser: number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogPaymentsComponent>,
    public apistreaming: ApistreamingService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public payment: Payment
  ) {
    if (this.payment !== null) {
      this.id = payment.idPago!;
      this.price = payment.precioPago;
      this.status = payment.idStatus;
      this.idmonthly = payment.idMensualidad;
      this.iduser = payment.idUsuario;
    }
  }

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

  updatePayment() {
    const payment: Payment = {
      precioPago: this.price,
      idStatus: this.status,
      idMensualidad: this.idmonthly,
      idUsuario: this.iduser
    };
    this.apistreaming.putPayment(payment, this.id).subscribe(response => {
      if (response.success === 1) {
        this.dialogRef.close();
        this.snackBar.open("Pago modificado", "", {
          duration: 2000
        });
      }
      else {
        alert("Error: " + response.message);
      }
    });
  }
}
