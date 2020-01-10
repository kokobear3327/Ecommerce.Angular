import { CategoriesService } from './../../../commun/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { CourseService } from '../../services/course.service'
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  categories: any[];
  courses:any[];
  
  constructor(private serviceCategories:CategoriesService, private serviceCourses:CourseService) { }

  ngOnInit() {
    this.serviceCategories.getAllCategories()
      .pipe(
        mergeMap(categories=>this.serviceCourses.getAllCourses().pipe(
          map(courses=>[categories, courses])
        ))).subscribe(([categories, courses])=>{
          this.categories=categories;
          this.courses=courses;
          console.log(courses);
          console.log(categories);
    })
  }
}
