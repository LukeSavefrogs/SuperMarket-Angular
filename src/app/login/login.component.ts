import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user  = {username:'', password:''};

  constructor(private loginService: LoginService, private location: Location, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user).subscribe(data => {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
      // salva cio che dice il server
      localStorage.setItem('token', btoa(this.user.username + ':' + this.user.password));
      // salva token d'autenticazione (user+password autenticata) e rifà il login in automatico
      this.router.navigate(['lista'], {replaceUrl: true});
      location.reload();
    }, err => {
      console.log(err);
    })
  }
}

