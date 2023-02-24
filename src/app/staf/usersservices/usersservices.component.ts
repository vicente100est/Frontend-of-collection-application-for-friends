import { Component, OnInit } from '@angular/core';

import { ApistreamingService } from 'src/app/services/apistreaming.service';

@Component({
  selector: 'app-usersservices',
  templateUrl: './usersservices.component.html',
  styleUrls: ['./usersservices.component.scss']
})
export class UsersservicesComponent implements OnInit {

  public lstServices: any[] = [];
  public lstUsersServices: any[] = [];

  constructor(
    private _apistreaming: ApistreamingService
  ) { }

  ngOnInit(): void {
    this.getService();
    this.getUsersByService(2);
  }

  getService() {
    this._apistreaming.getStreamingService().subscribe(response => {
      if (response.success === 1) {
        this.lstServices = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    });
  }

  getUsersByService(idService: number) {
    this._apistreaming.getUserByService(idService).subscribe(response => {
      if (response.success === 1) {
        this.lstUsersServices = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    });
  }

}
