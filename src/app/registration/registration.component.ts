import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {Location} from "@angular/common";
import {User} from "../model/User";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private user:User = new User;

  constructor(private loginService:LoginService, private location:Location, private router:Router ) { }

  ngOnInit() {
  }
  registration() {
    this.loginService.registration(this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(['login']);
    }, err => {
      console.log(err);
    })
  }
}

