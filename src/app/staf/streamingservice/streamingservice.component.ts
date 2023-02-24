import { Component, OnInit } from '@angular/core';

import { ApistreamingService } from 'src/app/services/apistreaming.service';

@Component({
  selector: 'app-streamingservice',
  templateUrl: './streamingservice.component.html',
  styleUrls: ['./streamingservice.component.scss']
})
export class StreamingserviceComponent implements OnInit {

  public lstStreamings: any[] = [];

  constructor(
    private _apistreaming: ApistreamingService
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

}
