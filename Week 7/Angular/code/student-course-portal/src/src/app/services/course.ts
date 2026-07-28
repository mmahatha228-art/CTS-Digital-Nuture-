import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses() {
    return [
      {
        name: 'Java',
        trainer: 'John',
        duration: '30 Days',
        fee: 5000
      },
      {
        name: 'Angular',
        trainer: 'David',
        duration: '25 Days',
        fee: 6000
      },
      {
        name: 'Python',
        trainer: 'Smith',
        duration: '20 Days',
        fee: 4500
      }
    ];
  }

}