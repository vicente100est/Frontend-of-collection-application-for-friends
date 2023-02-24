import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';

import { Response } from '../model/response';

const httpOption = {
  headers: {
    'Content-Type': 'application/json'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApistreamingService {

  constructor(
    private _http: HttpClient
  ) { }

  getPaymentByStatusAndUser(): Observable<Response> {
    return this._http.get<Response>(environment.url +
      "Pagos/payment/1/1", httpOption);
  }
}
