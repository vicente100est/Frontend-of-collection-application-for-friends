import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiauthService } from "src/app/services/apiauth.service";

@Component({ templateUrl: './loginadmin.component.html' })

export class LoginAdminComponent implements OnInit {
  public name: string = '';
  public password: string = '';

  constructor(
    public apiAuth: ApiauthService,
    private _router: Router
  ) {
    if (this.apiAuth.administradorData.tokenAdministrador != null) {
      this._router.navigate(['/controlpanel']);
    }
  }

  ngOnInit(): void {
  }

  login() {
    this.apiAuth.loginAdmin(this.name, this.password).subscribe(response => {
      if (response.success === 1) {
        this._router.navigate(['/controlpanel']);
      }
    });
  }

}
