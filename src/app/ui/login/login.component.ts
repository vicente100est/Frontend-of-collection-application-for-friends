import { Component, OnInit } from "@angular/core";
import { ApiauthService } from '../../services/apiauth.service';

@Component({ templateUrl: './login.component.html' })

export class LoginUserComponent implements OnInit {

  public dateofbird: string = '';
  public telephone: string = '';

  constructor(
    public apiAuth: ApiauthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.apiAuth.loginUser(this.dateofbird, this.telephone).subscribe(response => {
      console.log(response);
    });
  }

}