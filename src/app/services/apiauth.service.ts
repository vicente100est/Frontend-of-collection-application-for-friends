import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Response } from '../model/response';
import { environment } from '../../environments/environment.development';
import { Admin } from '../model/admin';

const httpOption = {
  headers: {
    'Content-Type': 'application/json'
  }
}

@Injectable({
  providedIn: 'root'
})

export class ApiauthService {

  private _administradorSubject: BehaviorSubject<Admin> = new BehaviorSubject<Admin>({} as Admin);

  public get administradorData(): Admin {
    return this._administradorSubject.value;
  }

  constructor(
    private _http: HttpClient
  ) {
    this._administradorSubject = new BehaviorSubject<Admin>(JSON.parse(localStorage.getItem('administrador') || '{}'));
  }

  loginAdmin(nombreAdministrador: string, contrasenaAdministrador: string): Observable<Response> {
    return this._http.post<Response>(environment.url +
      `Auth/Admin`, {nombreAdministrador, contrasenaAdministrador}, httpOption).pipe(
        map(res => {
          if (res.success === 1) {
            const admin: Admin = res.data;
            localStorage.setItem('administrador', JSON.stringify(admin));
            this._administradorSubject.next(admin);
          }

          return res;
        })
      );
  }

  logoutAdmin() {
    localStorage.removeItem('administrador');
    this._administradorSubject?.next({} as Admin);
  }

}
