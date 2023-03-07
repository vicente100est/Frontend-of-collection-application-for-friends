import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApistreamingService } from 'src/app/services/apistreaming.service';
import { UsersService } from 'src/app/model/usersservice';

@Component({
  templateUrl: './dialogus.component.html',
})

export class DialogUSComponent implements OnInit{

  public lstServices: any[] = [];
  public lstUsers: any[] = [];

  public idstreaming: number = 0;
  public idusuario: number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogUSComponent>,
    public apistreaming: ApistreamingService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getStreamings();
    this.getUsers();
  }

  close() {
    this.dialogRef.close();
  }

  getStreamings() {
    this.apistreaming.getStreamingService().subscribe(response => {
      if (response.success === 1) {
        this.lstServices = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    });
  }

  getUsers() {
    this.apistreaming.getUsers().subscribe(response => {
      if (response.success === 1) {
        this.lstUsers = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    });
  }

  addUsersService() {
    const us: UsersService = {
      idUsuario: this.idusuario,
      idServicio: this.idstreaming
    }
    this.apistreaming.postUserService(us).subscribe(response => {
      if (response.success === 1) {
        this.dialogRef.close();
        this.snackBar.open("Usuario agregado correctamente", "", {duration: 2000});
      }
      else {
        alert("Error: " + response.message);
      }
    });
  }
}
