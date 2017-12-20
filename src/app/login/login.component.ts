import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {Location} from "@angular/common";
import {User} from "../model/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:User = new User;

  constructor(private loginService: LoginService, private location: Location, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user).subscribe(data => {
      this.playLogin()
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
      // salva cio che dice il server
      localStorage.setItem('token', btoa(this.user.username + ':' + this.user.password));
      // salva token d'autenticazione (user+password autenticata) e rifà il login in automatico
      this.router.navigate(['lista'], {replaceUrl: true}); //x navigare tra le pag solo in angular
      location.reload();
    }, err => {
      console.log(err);
      this.playErr()
    })
  }

  playLogin(){
    let audio = new Audio();
    audio.src = "../../assets/Sounds/Microsoft_Windows_XP_Startup_Sound.mp3";
    audio.load();
    audio.play();
  }

  playErr(){
    let audio = new Audio();
    audio.src = "../../assets/Sounds/WINDOWS_XP_ERROR_SOUND.mp3";
    audio.load();
    audio.play();
  }
}

