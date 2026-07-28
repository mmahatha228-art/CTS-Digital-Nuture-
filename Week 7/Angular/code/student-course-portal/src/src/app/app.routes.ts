import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseCard } from './pages/course-card/course-card';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollment } from './pages/reactive-enrollment/reactive-enrollment';
import { PipesDemo } from './pages/pipes-demo/pipes-demo';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'courses',
    component: CourseCard
  },
  {
    path: 'enrollment',
    component: EnrollmentForm
  },
  {
    path: 'reactive',
    component: ReactiveEnrollment
  },
  {
    path: 'pipes',
    component: PipesDemo
  }
];