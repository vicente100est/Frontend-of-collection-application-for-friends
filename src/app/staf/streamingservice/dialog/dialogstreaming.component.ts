import { Component, Inject } from "@angular/core";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ApistreamingService } from 'src/app/services/apistreaming.service';

import { StreamingService } from '../../../model/streamingservice';

@Component({
  templateUrl: './dialogstreaming.component.html'
})

export class DialogStreamingComponent {

  public id: number = 0;
  public name: string = '';
  public price: number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogStreamingComponent>,
    public apistreaming: ApistreamingService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public streamings: StreamingService
  ) {
    if (this.streamings !== null) {
      this.id = streamings.idServicio!;
      this.name = streamings.nombreServicio;
      this.price = streamings.precioServicio;
    }
  }

  close() {
    this.dialogRef.close();
  }

  addStreaming() {
    const streaming: StreamingService = { nombreServicio: this.name, precioServicio: this.price };
    this.apistreaming.postStreamings(streaming).subscribe(response => {
      if (response.success === 1) {
        this.dialogRef.close();
        this.snackBar.open('Se agregó el servicio', '', {duration: 2000});
      }
      else {
        alert("Error: " + response.message);
      }
    });
  }

  updateStreaming() {
    const streaming: StreamingService = {
      nombreServicio: this.name,
      precioServicio: this.price
    };
    this.apistreaming.putStreamings(streaming, this.id).subscribe(response => {
      if (response.success === 1) {
        this.dialogRef.close();
        this.snackBar.open('Se ha editado el servicio', '', {duration: 2000});
      }
      else {
        alert("Error: " + response.message);
      }
    });
  }

}
