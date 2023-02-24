import { Component, OnInit } from '@angular/core';

import { ApistreamingService } from 'src/app/services/apistreaming.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public lstUser: any[] = []

  constructor(
    private _apistreaming: ApistreamingService
  ) {  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this._apistreaming.getUsers().subscribe(response => {
      if (response.success === 1) {
        this.lstUser = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    })
  }
}
