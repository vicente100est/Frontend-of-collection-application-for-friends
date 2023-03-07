import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Payment } from 'src/app/model/payment';

import { ApistreamingService } from '../../services/apistreaming.service';

import { DialogPaymentsComponent } from './dialog/dialogpayment.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public idStatus: number = 2;

  public lstStatus: any[] = [];
  public lstPayments: any[] = [];

  private readonly width: string = '300px';

  constructor(
    private _apistreaming: ApistreamingService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getStatusPayment();
    this.getPayments(this.idStatus);
  }

  getPayments(idStatus: number) {
    this._apistreaming.getPaymentByStatus(idStatus).subscribe(response => {
      if (response.success === 1) {
        this.lstPayments = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    })
  }

  getStatusPayment() {
    this._apistreaming.getStatus().subscribe(response => {
      if (response.success === 1) {
        this.lstStatus = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogPaymentsComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPayments(this.idStatus);
    });
  }

  openEdit(pay: Payment) {
    const dialogRef = this.dialog.open(DialogPaymentsComponent, {
      width: this.width,
      data: pay
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPayments(this.idStatus);
    });
  }

}
