import { LoginService } from './../../../authen/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit {
  constructor(private login: LoginService) {}

  ngOnInit() {}

  logout() {
    this.login.logoutWithGoogle();
  }
}
