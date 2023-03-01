import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ApistreamingService } from 'src/app/services/apistreaming.service';
import { DialogMonthlyComponent } from './dialog/dialogmonthly.component';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  public lstMonthly: any[] = [];

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
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getMonthly();
    });
  }

}
