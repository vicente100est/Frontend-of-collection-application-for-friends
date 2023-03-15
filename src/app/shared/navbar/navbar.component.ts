import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiauthService } from 'src/app/services/apiauth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public admin = this._apiAuth.administradorData;

  constructor(
    private _apiAuth: ApiauthService,
    private _router: Router
  ) {}

  logout() {
    this._apiAuth.logoutAdmin();
    this._router.navigate(['/login']);
  }
}
