import { ShoppingCartService } from './../../../shoppingCart/services/shopping-cart.service';
import { Router } from '@angular/router';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { LoginService } from './../../../authen/services/login.service';
import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit {
  user: firebase.User;
  nbrShoppingCourse: number = 0;
  constructor(
    private login: LoginService,
    private router: Router,
    private shoppingCart: ShoppingCartService
  ) {}

  ngOnInit() {
    this.login
      .getCurrentUser()
      .pipe(
        switchMap(user => {
          if (!user) return 'e';
          return this.login.getCurrentUserDb();
        }),
        mergeMap(userDb =>
          this.shoppingCart.getListItemsShoppingCart().pipe(
            map(coursesShopping => {
              return [userDb, coursesShopping];
            })
          )
        )
      )
      .subscribe(
        ([userDb, coursesShopping]) => {
          this.nbrShoppingCourse = (coursesShopping as any[]).length;
          if (userDb != 'e') {
            this.user = userDb;
          } else {
            this.user = null;
          }
        },
        erreur => console.log
      );
  }

  logout() {
    this.login.logoutWithGoogle();
  }

  recapShopping() {
    this.router.navigate(['/shopping-cart']);
  }
}
