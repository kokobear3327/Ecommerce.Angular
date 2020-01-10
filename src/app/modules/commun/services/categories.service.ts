import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor(private db: AngularFireDatabase) {}

  getAllCategories()
  {
    return this.db.list('categories')
    .snapshotChanges()
    .pipe(
      map(change=>change.map(c=>({
        key:c.payload.key, ...c.payload.val()
      }))
    ))
  }
}
