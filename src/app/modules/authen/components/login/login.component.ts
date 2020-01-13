import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private login: LoginService) {}

  ngOnInit() {}

  onLogin() {
    this.login.loginWithGoogle();
  }

  onLogout() {
    this.login.logoutWithGoogle;
  }
}
