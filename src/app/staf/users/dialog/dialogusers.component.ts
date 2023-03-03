import { Component } from "@angular/core";

import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ApistreamingService } from 'src/app/services/apistreaming.service';

import { User } from "src/app/model/user";

@Component({
  templateUrl: './dialogusers.component.html',
})

export class DialogUsersComponent {

  public name: string = "";
  public lastname: string = "";
  public birthdate: string = "";
  public phone: string = "";

  constructor(
    public dialogRef: MatDialogRef<DialogUsersComponent>,
    public apistreaming: ApistreamingService,
    public snackBar: MatSnackBar
  ) { }

  close() {
    this.dialogRef.close();
  }

  addUser() {
    const user: User = {
      nombresUsuario: this.name,
      apellidoUsuario: this.lastname,
      fechaNacimientoUsuario: this.birthdate,
      telefonoUsuario: this.phone
    };
    this.apistreaming.postUsers(user).subscribe(response => {
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
