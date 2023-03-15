import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiauthService } from 'src/app/services/apiauth.service';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public adminLog: Admin = {} as Admin;

  constructor(
    private _apiAuth: ApiauthService,
    private _router: Router
  ) {
    this._apiAuth.admin.subscribe(res => {
      this.adminLog = res;
      console.log('Cambio el objeto: ' + res);
    });
  }

  logout() {
    this._apiAuth.logoutAdmin();
    this._router.navigate(['/login']);
  }
}
