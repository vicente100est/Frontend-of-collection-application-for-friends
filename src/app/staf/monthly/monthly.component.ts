import { Component, OnInit } from '@angular/core';

import { ApistreamingService } from 'src/app/services/apistreaming.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  public lstMonthly: any[] = [];

  constructor(
    private _apistreaming: ApistreamingService
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

}
