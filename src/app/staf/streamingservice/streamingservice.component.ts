import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';


import { ApistreamingService } from 'src/app/services/apistreaming.service';
import { DialogStreamingComponent } from './dialog/dialogstreaming.component';

@Component({
  selector: 'app-streamingservice',
  templateUrl: './streamingservice.component.html',
  styleUrls: ['./streamingservice.component.scss']
})
export class StreamingserviceComponent implements OnInit {

  public lstStreamings: any[] = [];

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
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getStreaming();
    });
  }

}
