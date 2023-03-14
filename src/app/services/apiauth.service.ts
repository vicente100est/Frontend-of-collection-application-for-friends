import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../model/response';
import { environment } from '../../environments/environment.development';

const httpOption = {
  headers: {
    'Content-Type': 'application/json'
  }
}

@Injectable({
  providedIn: 'root'
})

export class ApiauthService {
  constructor(
    private _http: HttpClient
  ) { }

  loginUser(fechaNacimientoUsuario: string, telefonoUsuario: string): Observable<Response> {
    return this._http.post<Response>(environment.url +
      `Auth/User`, {fechaNacimientoUsuario, telefonoUsuario}, httpOption);
  }

  loginAdmin(nombreAdministrador: string, contrasenaAdministrador: string): Observable<Response> {
    return this._http.post<Response>(environment.url +
      `Auth/Admin`, {nombreAdministrador, contrasenaAdministrador}, httpOption);
  }
}
