import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { StreamingService } from 'src/app/model/streamingservice';

import { ApistreamingService } from 'src/app/services/apistreaming.service';
import { DialogStreamingComponent } from './dialog/dialogstreaming.component';

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
    public dialog: MatDialog
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

}
