import { Component, OnInit, Inject } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ApistreamingService } from 'src/app/services/apistreaming.service';

import { MonthlyPayment } from '../../../model/monthlypayment';

@Component({
  templateUrl: './dialogmonthly.component.html'
})

export class DialogMonthlyComponent implements OnInit{

  public name: string = '';
  public price: number = 0;
  public idstreaming: number = 0;

  public lstStreaming: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogMonthlyComponent>,
    public apistreaming: ApistreamingService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public monthly: MonthlyPayment
  ) {
    if (this.monthly !== null) {
      this.name = monthly.nombreMensualidad;
      this.price = monthly.precioMensualidad;
      this.idstreaming = monthly.idServicio;
    }
  }

  ngOnInit(): void {
    this.getStreamings();
  }

  close() {
    this.dialogRef.close();
  }

  getStreamings() {
    this.apistreaming.getStreamingService().subscribe(response => {
      if (response.success === 1) {
        this.lstStreaming = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    });
  }

  addMonthly() {
    const monthly: MonthlyPayment = {
      nombreMensualidad: this.name,
      precioMensualidad: this.price,
      idServicio: this.idstreaming
    };
    this.apistreaming.postMonthlyPayment(monthly).subscribe(response => {
      if (response.success === 1) {
        this.dialogRef.close();
        this.snackBar.open('Se agregó la mensualidad', '', {duration: 2000});
      }
      else {
        alert("Error: " + response.message);
      }
    });
  }
}
