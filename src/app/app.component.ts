import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'ecommerce-angular';

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.db.list('/courses').valueChanges().subscribe(courses=>console.log(courses));
  }
}
