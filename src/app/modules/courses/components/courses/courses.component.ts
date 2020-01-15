import { ShoppingCartService } from './../../../shoppingCart/services/shopping-cart.service';
import { CategoriesService } from './../../../commun/services/categories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  categories: any[];
  courses: any[];
  coursesShoppingCart: any[];
  sub: Subscription;

  constructor(
    private serviceCategories: CategoriesService,
    private serviceCourses: CourseService,
    private serviceShoppingCart: ShoppingCartService
  ) {}

  ngOnInit() {
    this.sub = this.serviceCategories
      .getAllCategories()
      .pipe(
        mergeMap(categories =>
          this.serviceCourses
            .getAllCourses()
            .pipe(
              mergeMap(courses =>
                this.serviceShoppingCart
                  .getListItemsShoppingCart()
                  .pipe(
                    map(coursesShopping => [
                      categories,
                      courses,
                      coursesShopping
                    ])
                  )
              )
            )
        )
      )
      .subscribe(([categories, courses, coursesShopping]) => {
        this.categories = categories;
        this.courses = courses;
        this.coursesShoppingCart = coursesShopping;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addToCart(course) {
    this.serviceShoppingCart.addToCart(course);
  }

  deleteFromCart(course) {
    this.serviceShoppingCart.deleteFromCart(course.key);
  }

  existCourseInShoppingCart(key) {
    return this.coursesShoppingCart.find((course: any) => course.key == key);
  }
}
