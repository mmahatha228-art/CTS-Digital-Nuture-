import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../../services/api';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, Highlight],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnInit {

  courses: any[] = [];

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getCourses().subscribe({
      next: (data) => {
        console.log('Courses:', data);
        this.courses = data;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }

}