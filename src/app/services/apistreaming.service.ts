import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';

import { Response } from '../model/response';
import { StreamingService } from '../model/streamingservice';
import { MonthlyPayment } from '../model/monthlypayment';
import { User } from '../model/user';
import { UsersService } from '../model/usersservice';
import { Payment } from '../model/payment';

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

  getPaymentByStatusAndUser(idUser: number, idStatus: number): Observable<Response> {
    return this._http.get<Response>(environment.url +
      "Pagos/payment/"+idUser+"/"+idStatus+"", httpOption);
  }

  getUsersService(idUser: number): Observable<Response> {
    return this._http.get<Response>(environment.url +
      "Usuario/userservice/user="+idUser+"", httpOption);
  }

  getStatus(): Observable<Response> {
    return this._http.get<Response>(environment.url +
      "Status", httpOption);
  }

  getStreamingService(): Observable<Response> {
    return this._http.get<Response>(environment.url +
      "Servicio", httpOption);
  }

  getMonthlyPayment(): Observable<Response> {
    return this._http.get<Response>(environment.url +
      "Mensualidad", httpOption);
  }

  getUsers(): Observable<Response> {
    return this._http.get<Response>(environment.url +
      "Usuario", httpOption);
  }

  getUserByService(idService: number): Observable<Response> {
    return this._http.get<Response>(environment.url +
      "Servicio/servicesuser/"+idService+"", httpOption);
  }

  getPaymentByStatus(idStatus: number): Observable<Response> {
    return this._http.get<Response>(environment.url +
      "Pagos/payment/when-status="+idStatus+"", httpOption);
  }

  postStreamings(streaming: StreamingService): Observable<Response> {
    return this._http.post<Response>(environment.url +
      "Servicio", streaming, httpOption);
  }

  postMonthlyPayment(monthlyPayment: MonthlyPayment): Observable<Response> {
    return this._http.post<Response>(environment.url +
      "Mensualidad", monthlyPayment, httpOption);
  }

  postUsers(user: User): Observable<Response> {
    return this._http.post<Response>(environment.url +
      "Usuario", user, httpOption);
  }

  postUserService(us: UsersService): Observable<Response> {
    return this._http.post<Response>(environment.url +
      "UsuarioServicio", us, httpOption);
  }

  postPayment(payment: Payment): Observable<Response> {
    return this._http.post<Response>(environment.url +
      "Pagos", payment, httpOption);
  }
}
