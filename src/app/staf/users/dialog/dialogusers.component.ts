import { Component, Inject } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ApistreamingService } from 'src/app/services/apistreaming.service';

import { User } from "src/app/model/user";

@Component({
  templateUrl: './dialogusers.component.html',
})

export class DialogUsersComponent {

  public id: number = 0;
  public name: string = "";
  public lastname: string = "";
  public birthdate: string = "";
  public phone: string = "";

  constructor(
    public dialogRef: MatDialogRef<DialogUsersComponent>,
    public apistreaming: ApistreamingService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public users: User
  ) {
    if (this.users !== null) {
      this.id = users.idUsuario!;
      this.name = users.nombresUsuario;
      this.lastname = users.apellidoUsuario;
      this.birthdate = users.fechaNacimientoUsuario;
      this.phone = users.telefonoUsuario;
    }
  }

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

  updateUser() {
    const user: User = {
      nombresUsuario: this.name,
      apellidoUsuario: this.lastname,
      fechaNacimientoUsuario: this.birthdate,
      telefonoUsuario: this.phone
    };
    this.apistreaming.putUsers(user, this.id).subscribe(response => {
      if (response.success === 1) {
        this.dialogRef.close();
        this.snackBar.open("Se ha editado el usuario correctamente", "", {duration: 2000});
      }
      else {
        alert("Error: " + response.message);
      }
    });
  }
}
