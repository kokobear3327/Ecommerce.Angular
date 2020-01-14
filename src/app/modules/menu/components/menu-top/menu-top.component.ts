import { Router } from '@angular/router';
import { LoginService } from './../../../authen/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit {
  user: firebase.User;
  constructor(private login: LoginService, private router: Router) {}

  ngOnInit() {
    this.login.getCurrentUser().subscribe(user => (this.user = user));
  }

  logout() {
    this.login.logoutWithGoogle();
  }

  recapShopping() {
    this.router.navigate(['/shopping-cart']);
  }
}
