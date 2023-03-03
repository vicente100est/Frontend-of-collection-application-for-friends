import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ApistreamingService } from 'src/app/services/apistreaming.service';

import { DialogUSComponent } from './dialog/dialogus.component';

@Component({
  selector: 'app-usersservices',
  templateUrl: './usersservices.component.html',
  styleUrls: ['./usersservices.component.scss']
})
export class UsersservicesComponent implements OnInit {

  public idService: number = 0;

  public lstServices: any[] = [];
  public lstUsersServices: any[] = [];

  constructor(
    private _apistreaming: ApistreamingService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getService();
    this.getUsersByService(this.idService);
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

  openDialog() {
    const dialogRef = this.dialog.open(DialogUSComponent, {
      width: '300px',});
    dialogRef.afterClosed().subscribe(result => {
      this.getUsersByService(this.idService);
    })
  }

}
