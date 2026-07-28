import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  users = [
    { name: 'Mahatha', email: 'mahatha@gmail.com' },
    { name: 'John', email: 'john@gmail.com' },
    { name: 'David', email: 'david@gmail.com' }
  ];

  constructor() {}

  ngOnInit(): void {}

  onEnrollClick(): void {
    this.message = 'Enrollment Successful!';
  }
}