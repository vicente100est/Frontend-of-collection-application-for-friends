import { Component, OnInit } from '@angular/core';

import { ApistreamingService } from '../../services/apistreaming.service';

@Component({
  selector: 'app-mypayment',
  templateUrl: './mypayment.component.html',
  styleUrls: ['./mypayment.component.scss']
})
export class MypaymentComponent implements OnInit {

  public lstPayments: any[] = [];
  public lstStatus: any[] = [];

  constructor(
    private _apistreaming: ApistreamingService
  ) {  }

  ngOnInit(): void {
    this.getStatusPayment();
    this.getPayments(1,1);
  }

  getPayments(user: number, status: number) {
    this._apistreaming.getPaymentByStatusAndUser(user, status).subscribe(response => {
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
