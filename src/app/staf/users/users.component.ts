import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { User } from 'src/app/model/user';

import { ApistreamingService } from 'src/app/services/apistreaming.service';
import { DialogUsersComponent } from './dialog/dialogusers.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public lstUser: any[] = [];

  private readonly width: string = '300px';

  constructor(
    private _apistreaming: ApistreamingService,
    public dialog: MatDialog
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

  openDialog() {
    const dialogRef = this.dialog.open(DialogUsersComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUser();
    });
  }

  openEdit(user: User) {
    const dialogRef = this.dialog.open(DialogUsersComponent, {
      width: this.width,
      data: user
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUser();
    });
  }
}
