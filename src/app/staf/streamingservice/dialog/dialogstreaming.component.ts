import { Component } from "@angular/core";

import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ApistreamingService } from 'src/app/services/apistreaming.service';

import { StreamingService } from '../../../model/streamingservice';

@Component({
  templateUrl: './dialogstreaming.component.html'
})

export class DialogStreamingComponent {

  public name: string = '';
  public price: number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogStreamingComponent>,
    public apistreaming: ApistreamingService,
    public snackBar: MatSnackBar
  ) { }

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

}