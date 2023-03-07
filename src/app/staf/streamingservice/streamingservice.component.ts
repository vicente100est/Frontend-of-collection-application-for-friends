import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { StreamingService } from 'src/app/model/streamingservice';

import { ApistreamingService } from 'src/app/services/apistreaming.service';
import { DialogStreamingComponent } from './dialog/dialogstreaming.component';
import { DialogDeleteComponent } from '../../common/delete/dialogdelete.component';


@Component({
  selector: 'app-streamingservice',
  templateUrl: './streamingservice.component.html',
  styleUrls: ['./streamingservice.component.scss']
})
export class StreamingserviceComponent implements OnInit {

  public lstStreamings: any[] = [];
  private readonly width: string = '300px';

  constructor(
    private _apistreaming: ApistreamingService,
    public dialog: MatDialog,
    public snakBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getStreaming();
  }

  getStreaming() {
    this._apistreaming.getStreamingService().subscribe(response => {
      if (response.success === 1) {
        this.lstStreamings = response.data;
      }
      else {
        alert("Error: " + response.message);
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogStreamingComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getStreaming();
    });
  }

  openEdit(streaming: StreamingService) {
    const dialogRef = this.dialog.open(DialogStreamingComponent, {
      width: this.width,
      data: streaming
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getStreaming();
    });
  }

  deleteStreaming(streaming: StreamingService) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._apistreaming.deleteStreaming(streaming.idServicio!).subscribe(response => {
          if (response.success === 1) {
            this.snakBar.open("Streaming eliminado", "", {
              duration: 2000,
            });
            this.getStreaming();
          }
          else {
            alert("Error: " + response.message);
          }
        });
      }
    });
  }

}
