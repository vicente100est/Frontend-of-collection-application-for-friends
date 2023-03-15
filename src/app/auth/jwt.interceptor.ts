import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ApiauthService } from "../services/apiauth.service";
import { Observable } from 'rxjs';

@Injectable()

export class JwtInterceptor implements HttpInterceptor{

  constructor(
    private _apiAuth: ApiauthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const administrador = this._apiAuth.administradorData;

    if (administrador) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${administrador.tokenAdministrador}`
        }
      });
    }

    return next.handle(request);
  }

}
