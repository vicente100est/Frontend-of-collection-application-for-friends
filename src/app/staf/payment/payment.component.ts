import { Component, OnInit } from '@angular/core';
import { ApistreamingService } from '../../services/apistreaming.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public lstStatus: any[] = [];
  public lstPayments: any[] = [];

  constructor(
    private _apistreaming: ApistreamingService
  ) {}

  ngOnInit(): void {
    this.getStatusPayment();
    this.getPayments(1);
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

}
