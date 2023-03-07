import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { MonthlyPayment } from 'src/app/model/monthlypayment';

import { ApistreamingService } from 'src/app/services/apistreaming.service';
import { DialogMonthlyComponent } from './dialog/dialogmonthly.component';

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
    public dialog: MatDialog
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

}
