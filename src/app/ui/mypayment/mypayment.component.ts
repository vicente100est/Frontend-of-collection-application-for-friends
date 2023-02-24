import { Component, OnInit } from '@angular/core';

import { ApistreamingService } from '../../services/apistreaming.service';

@Component({
  selector: 'app-mypayment',
  templateUrl: './mypayment.component.html',
  styleUrls: ['./mypayment.component.scss']
})
export class MypaymentComponent implements OnInit {

  public lstPayments: any[] = [];

  constructor(
    private _apistreaming: ApistreamingService
  ) {  }

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments() {
    this._apistreaming.getPaymentByStatusAndUser().subscribe(response => {
      if (response.success === 1) {
        this.lstPayments = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    })
  }

}
