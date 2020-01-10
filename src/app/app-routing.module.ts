import { CoursesComponent } from './modules/courses/components/courses/courses.component';
import { HomeComponent } from './modules/commun/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'courses',
    component:CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
