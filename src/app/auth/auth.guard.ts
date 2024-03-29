import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiauthService } from '../services/apiauth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _apiAuth: ApiauthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const administrador = this._apiAuth.administradorData;

    if (administrador.tokenAdministrador != null){
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }
}
