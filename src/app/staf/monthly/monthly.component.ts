import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MonthlyPayment } from 'src/app/model/monthlypayment';

import { ApistreamingService } from 'src/app/services/apistreaming.service';
import { DialogMonthlyComponent } from './dialog/dialogmonthly.component';
import { DialogDeleteComponent } from 'src/app/common/delete/dialogdelete.component';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  public lstMonthly: any[] = [];
  private readonly width: string = '300px';

  constructor(
    private _apistreaming: ApistreamingService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getMonthly();
  }

  getMonthly() {
    this._apistreaming.getMonthlyPayment().subscribe(response => {
      if (response.success === 1) {
        this.lstMonthly = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogMonthlyComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getMonthly();
    });
  }

  openEdit(month: MonthlyPayment) {
    const dialogRef = this.dialog.open(DialogMonthlyComponent, {
      width: this.width,
      data: month
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getMonthly();
    });
  }

  deleteMonth(month: MonthlyPayment) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._apistreaming.deleteMonthlyPayment(month.idMensualidad!).subscribe(response => {
          if (response.success === 1) {
            this.snackBar.open("Mensualidad eliminada", "", {
              duration: 2000,
            });
            this.getMonthly();
          }
          else {
            alert("Error: " + response.message);
          }
        });
      }
    });
  }

}
