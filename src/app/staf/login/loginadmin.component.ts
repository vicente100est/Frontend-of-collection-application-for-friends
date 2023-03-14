import { Component, OnInit } from "@angular/core";
import { ApiauthService } from "src/app/services/apiauth.service";

@Component({ templateUrl: './loginadmin.component.html' })

export class LoginAdminComponent implements OnInit {
  public name: string = '';
  public password: string = '';

  constructor(
    public apiAuth: ApiauthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.apiAuth.loginAdmin(this.name, this.password).subscribe(response => {
      console.log(response);
    });
  }

}
