import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css'
})
export class PipesDemo {

  studentName = 'mahatha';
  course = 'angular development';
  fee = 6500;
  today = new Date();
  attendance = 0.95;

}