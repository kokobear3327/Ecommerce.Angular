import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor(private db:AngularFireDatabase) { }
  getAllCourses()
  {
    return this.db.list('/courses')
           .snapshotChanges()
           .pipe(
             map(changes =>
              changes.map(c => (
                {
                  key: c.payload.key, ...c.payload.val()
                }
       ))
    ))
  }
}
